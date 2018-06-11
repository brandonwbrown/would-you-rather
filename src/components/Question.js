import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'


class Question extends Component {

  render() {
    const { question, users } = this.props
    const { id, author, timestamp, optionOne, optionTwo  } = question ? question : null

    if (question === null) {
      return <p>This Question does not yet exist.</p>
    }

    return (
        <Fragment>
          { users ?
          <Link to={`/question/${id}`} className='question'>
            <img
              src={users.users[author].avatarURL}
              alt={`Avatar of ${author}`}
              className='avatar'
            />
            <div className='question-info'>
              <span>{author}</span>
              <div>{formatDate(timestamp)}</div>
              <p>Option One: {optionOne.text} Votes: {optionOne.votes.length}</p>
              <p>Option Two: {optionTwo.text} Votes: {optionTwo.votes.length}</p>
            </div>
          </Link>
          : null}
        </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users}) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default withRouter(connect(mapStateToProps)(Question))
