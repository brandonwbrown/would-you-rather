import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'


class QuestionPage extends Component {

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
    const { authedUser, id, users, questions } = this.props
    const  question  = questions[id]
    console.log("qs:"+JSON.stringify(question))
    return (
      <div>
        {authedUser ?
          <Fragment>
            <div>
              <h3 className='center'>Question Detail</h3>
              <ul className='dashboard-list'>
                {question ?
                  <Question
                    id={id}
                    question={question}
                    users={users}
                    unanswered={this.canVote(question, authedUser, "All")}/>
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

function mapStateToProps ({ questions, authedUser, users }, props) {
  const { id } = props.match.params

  return {
    questions: questions.questions,
    authedUser: authedUser,
    users: users.users,
    id: id
  }
}

export default connect(mapStateToProps)(QuestionPage)
