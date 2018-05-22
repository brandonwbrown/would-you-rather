import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialUsers } from '../actions/shared'
import Button from 'react-bootstrap/lib/Button';



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
    logins.map((n) => (console.log(n)))

    return (
      <div>
        <Fragment>
          <LoadingBar />
        </Fragment>
        <div>
          <h3 className="center">Please login.</h3>
        </div>
          { this.props.loading === true ?
            null
            :
            <div className="center">
              <select value={authedUser}>
                <option disabled>Choose a name...</option>
                {logins.map((item) => {
                  <option key={item} value={item}>{item}</option>
                })}
              </select>
              <div className="center">
                <Button bsStyle="primary" onClick={(e) => this.handleLogin(e)}>Go</Button>
              </div>
            </div>
          }
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
