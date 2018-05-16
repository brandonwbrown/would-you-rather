import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialUsers } from '../actions/shared'


class Login extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
  }

  handleLogin = (event) => {
    if (event.target.value){
      console.log("User selected:", event.target.value)
      //TODO: set user in the redux store
    }
  };

  render() {
    const { users, authedUser } = this.props
    const names = Object.keys((users || {}).users || {})
    const logins = []
    Array.prototype.forEach.call(names, (n) => (logins.push(n)))
    console.log(logins)
    logins.forEach((n) => (console.log(n)))

    return (
      <div>
        <Fragment>
          <LoadingBar />
        </Fragment>
        <div>
          <h2 className="center">Please login.</h2>
        </div>
        <div className="center">
          { this.props.loading === true ?
            null
            :
            <select value={authedUser} onChange={(e) => this.handleLogin(e)}>
              <option disabled>Choose a name...</option>
              {logins.length > 0 ? logins.forEach((item) => {
                <option value={item}>{item}</option>
              }) : null}
            </select>
            }
        </div>
      </div>
    )
  }
}
function mapStateToProps ({ authedUser, users }) {
  return {
    loading: users === null,
    users: users
  }
}
export default connect(mapStateToProps)(Login)
