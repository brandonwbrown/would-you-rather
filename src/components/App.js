import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <h1 className="center"> Would You Rather? </h1>
        <Fragment>
          <Router>
            {this.props.authedUser ?
              <Fragment>
                <LoadingBar />
                <div className='container'>
                  <Nav />
                  {this.props.loading === true
                    ? null
                    : <div>
                        <p>Starting here...</p>
                      </div>}
                </div>
              </Fragment>
              :
              <Fragment>
                <Login users={this.props.users} authedUser={this.props.authedUser}/>
              </Fragment>
            }
          </Router>
        </Fragment>
      </div>
    )
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
