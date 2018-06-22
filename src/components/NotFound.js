import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'


class NotFound extends Component {

  render() {
    const { authedUser } = this.props

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

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(NotFound)
