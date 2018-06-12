import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Dashboard from './Dashboard'
import Question from './Question'
import Leaderboard from './Leaderboard'
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
              <Route path='/leaderboard' exact component={Leaderboard} />
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
