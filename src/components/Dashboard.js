import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'



class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, questionIds } = this.props
    questionIds ? console.log("questionIDs keys:"+(Object.keys(questionIds))) : null

    return (
      <div>
        {authedUser ?
          <div>
            <h3 className='center'>Question History</h3>
            <ul className='dashboard-list'>
              {questionIds ? Object.values(questionIds).map((q) => {
                <li key={q.id}>
                  <Question question={q}/>
                </li>})
                : null
              }
            </ul>
          </div>
          :
          <Redirect to='/login' />
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  console.log("questions:"+JSON.stringify(questions.questions))
  return {
    questionIds: questions.questions,
      //.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
