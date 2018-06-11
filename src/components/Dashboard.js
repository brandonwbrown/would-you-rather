import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'


class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, questionIds, users } = this.props

    return (
      <div>
        {authedUser ?
          <Fragment>
            <Nav/>
            <div>
              <h3 className='center'>Question History</h3>
              <ul className='dashboard-list'>
                {questionIds ? Object.values(questionIds).map((q) => {
                  return (
                      <li key={q.id}>
                        <Question id={q.id} question={q} users={users}/>
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
    questionIds: questions.questions,
    authedUser: authedUser,
    users: users.users
  }
}

export default connect(mapStateToProps)(Dashboard)
