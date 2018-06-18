import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'


class NotFound extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, users } = this.props

    return (
      <div>
        <Fragment>
          <div>
            <h3 className='center'>404 error - Ooops! Page not found!</h3>
          </div>
        </Fragment>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default connect(mapStateToProps)(NotFound)
