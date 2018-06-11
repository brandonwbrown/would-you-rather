import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialUsers } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import Button from 'react-bootstrap/lib/Button';


class Login extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
  }

  handleLoginChange = (event) => {
    if (event.target.value){
      this.props.dispatch(setAuthedUser(event.target.value))
    }
  }

  handleLoginClick = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { users, authedUser } = this.props
    const names = Object.keys((users || {}).users || {})
    const logins = []
    Array.prototype.forEach.call(names, (n) => (logins.push(n)))

    return (
      <div>
        <div>
          <h3 className="center">Please login.</h3>
        </div>
        <div className="center">
          <select value={authedUser} onChange={(e) => this.handleLoginChange(e)}>
            <option value="">Choose a name...</option>
            {logins.map((item) => {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
          <div className="center">
            <Button bsStyle="primary" onClick={this.handleLoginClick}>Go</Button>
          </div>
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
