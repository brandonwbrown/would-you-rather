import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {

  state = {
    display: "Unanswered",
    questions: []
  }

  displayChoices = ["Unanswered", "Answered", "All"]

  handleDisplayChange = (event) => {
    if(event.target.value){
      this.setState({display: event.target.value})
    }
  }

  shouldDisplay = (question, display, authedUser) => {
    if(display === "All"){
      return true
    }else if(display === "Answered"){
      return(question.optionOne.votes.indexOf(authedUser) >= 0 ||
          question.optionTwo.votes.indexOf(authedUser) >= 0)
    }else if(display === "Unanswered"){
      return(question.optionOne.votes.indexOf(authedUser) < 0 &&
          question.optionTwo.votes.indexOf(authedUser) < 0)
    }else{
      return false
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
    const { authedUser, questionIds, users } = this.props

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
                {questionIds ? Object
                  .values(questionIds)
                  .filter((q) => {
                    return this.shouldDisplay(q, this.state.display, authedUser)
                  }).map((q) => {
                    return (
                        <li key={q.id}>
                          <Question
                            id={q.id}
                            question={q}
                            users={users}
                            unanswered={this.canVote(q, authedUser, this.state.display)}/>
                        </li>)
                      })
                  : null
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
  return {
    authedUser: authedUser,
    users: users.users,
    questionIds: questions.questions
     // ?
     //  Object.keys(questions.questions).sort(((a,b,) => questions.questions[b].timestamp - questions.questions[a].timestamp))
     //  :
     //  {},
  }
}

export default connect(mapStateToProps)(Dashboard)
