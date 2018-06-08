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
    //questionIds ? console.log("questionIDs values:"+JSON.stringify(Object.values(questionIds))) : null

    return (
      <div>
        {authedUser ?
          <div>
            <h3 className='center'>Question History</h3>
            <ul className='dashboard-list'>
              {questionIds ? Object.values(questionIds).map((q) => {
                return (
                    <li key={q.id}>
                      <p>{q.id}</p>
                      <Question question={q}/>
                    </li>)
                  })
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
  return {
    questionIds: questions.questions,
      //.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
