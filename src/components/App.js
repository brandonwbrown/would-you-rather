import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import HomePage from './HomePage'
import NotFound from './NotFound'
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
              <Route path='/' component={HomePage} />
              {/*
              }// <PrivateRoute
              //   exact
              //   path="/"
              //   component={HomePage}
              // />
              // <PrivateRoute
              //   path="/question/:question_id"
              //   component={QuestionPage}
              // />
              // <PrivateRoute path="/add" component={NewQuestion} />
              // <PrivateRoute
              //   path="/leaderboard"
              //   component={Leaderboard}
              // />
              */}
              <Route component={NotFound} />
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

export default connect (mapStateToProps)(App)
