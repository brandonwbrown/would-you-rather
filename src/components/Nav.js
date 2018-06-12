import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = (event) => {
    if (event){
      this.props.dispatch(setAuthedUser(null))
    }
  }

  render() {
    const { authedUser, users } = this.props

    return (
        <Fragment>
          <nav className='nav'>
            <ul>
              <li className="figure">
                <figure>
                  <img
                    src={users.users[authedUser].avatarURL}
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
                <NavLink to='/new' activeClassName='active'>
                  New Question
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

function mapStateToProps ({ authedUser, users}) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default connect(mapStateToProps)(Nav)
