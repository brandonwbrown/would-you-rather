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
    const { authedUser, questions } = this.props
    console.log(questions)

    return (
      <div>
        {authedUser ?
          <div>
            <h3 className='center'>Question History</h3>
            <ul className='dashboard-list'>
              {questions.map((q) => {
                return (
                  <li key={q.id}>
                    <Question question={q}/>
                  </li>
                )
              })}
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
    questions: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
