import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import User from './User'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'


class Leaderboard extends Component {

  render() {
    const { authedUser, users } = this.props

    return (
      <div>
        {authedUser ?
          <Fragment>
            <Nav/>
            <div>
              <h3 className='center'>Leaders</h3>
              <ul className='dashboard-list'>
                {users ? Object.values(users)
                  .sort((a, b) => {
                    return(
                      a.questions.length + Object.keys(a.answers).length >
                      b.questions.length + Object.keys(b.answers).length ? -1
                      :
                      (b.questions.length + Object.keys(b.answers).length >
                      a.questions.length + Object.keys(a.answers).length ? 1
                      : 0)
                    )
                  })
                  .map((u, index) => {
                  var rank = index + 1
                  return (
                      <li key={u.id}>
                        <User id={u.id} user={u} rank={rank}/>
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

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users.users
  }
}

export default connect(mapStateToProps)(Leaderboard)
