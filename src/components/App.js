import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import Dashboard from './Dashboard'
import Question from './Question'
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
              <Route path='/login' component={Login} />
              <Route path='/question/:id' component={Question} />
              <Route path='/' exact component={Dashboard} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}
export default connect(mapStateToProps)(App)
