import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialUsers } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import { Button, Label } from 'react-bootstrap';


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
    // TODO:
    // I shouldn't need to create this array like this
    // I should be able to just use users but the API is giving me
    // users.users
    const { users, authedUser } = this.props
    // const names = Object.keys((users || {}).users || {})
    // const logins = []
    // Array.prototype.forEach.call(names, (n) => (logins.push(n)))

    return (
      <Fragment>
        <div><hr></hr></div>
        <div className="center">
          <Label>Please login: </Label>
          <select value={authedUser} onChange={(e) => this.handleLoginChange(e)}>
            <option value="">Choose a name...</option>
            {users.map((item) => {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
        </div>
        <div className="center">
          <Button bsStyle="primary" bsSize="small" onClick={this.handleLoginClick}>Go</Button>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: users === null,
    users: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)
