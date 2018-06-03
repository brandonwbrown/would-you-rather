import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
  render() {
    const { authedUser } = this.props

    return (
      <div>
        {this.props.authedUser ?
          <div>
            <h3 className='center'>Question History</h3>
            <ul className='dashboard-list'>
              {this.props.questions.map((id) => (
                <li key={id}>
                  <Question id={id}/>
                </li>
              ))}
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
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
