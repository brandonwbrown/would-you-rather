import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import HomePage from './HomePage'
import LoadingBar from 'react-redux-loading'


class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <h1 className="center">Would You Rather?</h1>
            <Switch>
              <Route path='/login' exact component={Login} />
              <Route path='/' component={HomePage}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default connect(mapStateToProps)(App)
