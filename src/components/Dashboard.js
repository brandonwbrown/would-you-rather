import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {

  state = {
    display: "Unanswered"
  }

  displayChoices = ["Unanswered", "Answered", "All"]

  handleDisplayChange = (event) => {
    if(event.target.value){
      this.setState({display: event.target.value})
    }
  }

  canVote = (question, authedUser, display) => {
    if(display === "Unanswered"){
      return true
    }else if(display === "All"){
      return (question.optionOne.votes.indexOf(authedUser) < 0 &&
        question.optionTwo.votes.indexOf(authedUser) < 0)
    }else{
      return false
    }
  }


  render() {
    const { authedUser, all, unanswered, answered, users } = this.props

    const qs = this.state.display === "Answered" ? answered :
      this.state.display === "Unanswered" ? unanswered : all

    return (
      <div>
        {authedUser ?
          <Fragment>
            <div>
              <h3 className='center'>Ze Questions</h3>
              <div className='center'>
                <select value={this.state.display} onChange={(e) => this.handleDisplayChange(e)}>
                  {this.displayChoices.map((item) => {
                    return <option key={item} value={item}>{item}</option>
                  })}
                </select>
              </div>
              <ul className='dashboard-list'>
                {qs.map((q) => {
                    return(<li key={q.id}>
                      <Question
                        id={q.id}
                        question={q}
                        users={users}
                        unanswered={this.canVote(q, authedUser, "All")}/>
                    </li>)
                  })
                }
              </ul>
            </div>
          </Fragment>
          :
          <Redirect to='/login' />
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  const all = Object.values(questions)
              .sort((a,b) => b.timestamp - a.timestamp)
  const answered = Object.values(all)
        .filter((q) => (
          q.optionOne.votes.includes(authedUser) ||
          q.optionTwo.votes.includes(authedUser)))
        .sort((a,b) => b.timestamp - a.timestamp)
  const unanswered = Object.values(all)
        .filter((q) => (
          !q.optionOne.votes.includes(authedUser) &&
          !q.optionTwo.votes.includes(authedUser)))
        .sort((a,b) => b.timestamp - a.timestamp)

  return {
    authedUser: authedUser,
    users: users,
    answered: answered,
    unanswered: unanswered,
    all: all
  }
}

export default connect(mapStateToProps)(Dashboard)
