import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Question from './Question'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import { handleInitialData } from '../actions/shared'


class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, match } = this.props

    console.log("Home match:"+JSON.stringify(match))

    return (
      <div>
        {authedUser ?
          <Fragment>
            <Nav/>
            <Switch>
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/question/:id' component={Question} />
              <Route path='/' exact component={Dashboard} />
            </Switch>
          </Fragment>
          :
          <Redirect to='/login' />
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(HomePage)
