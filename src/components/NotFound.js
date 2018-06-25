import React from 'react'
import { connect } from 'react-redux'


const NotFound = () => (
  <div>
    <h3 className='center'>404 error - Ooops! Page not found!</h3>
  </div>
)

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(NotFound)
