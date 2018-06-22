import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import NotFound from './NotFound'
import { handleInitialData } from '../actions/shared'


class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props

    return (
      <div>
        {authedUser ?
          <Fragment>
            <Nav/>
            <Switch>
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/add' exact component={NewQuestion} />
              <Route path='/question/:id' component={QuestionPage} />
              <Route path='/' exact component={Dashboard} />
              {/*TODO: this nested NotFound route doesn't work*/}
              <Route component={NotFound} />
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
