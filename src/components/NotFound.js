import React, { Component } from 'react'
import { connect } from 'react-redux'


class NotFound extends Component {

  render() {
    return (
      <div>
        <h3 className='center'>404 error - Ooops! Page not found!</h3>
      </div>
    )
  }
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(NotFound)
