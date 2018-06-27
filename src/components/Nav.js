import React, { Component, Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Logout } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = (event) => {
    if (event){
      this.props.dispatch(Logout())
    }
  }

  render() {
    const { authedUser, userIds } = this.props

    return (
        <Fragment>
          <nav className='nav'>
            <ul>
              <li className="figure">
                <figure>
                  <img
                    src={userIds[authedUser].avatarURL}
                    alt={`Avatar of ${authedUser}`}
                    className='avatar'
                  />
                <figcaption>Welcome {authedUser}</figcaption>
                </figure>
              </li>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                  Leaderboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' activeClassName='active' onClick={(e) => this.handleLogout(e)}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser,
    userIds: users.users
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
