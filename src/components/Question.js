import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'


class Question extends Component {

  render() {
    const { question, users} = this.props

    if (question === null) {
      return <p>This Question does not yet exist.</p>
    }

    const { id, author, timestamp, optionOne, optionTwo  } = question

    return (
        <Fragment>
          <Link to={`/question/${id}`} className='question'>
            <div className='question-header'>
              <img
                src={users.users[author].avatarURL}
                alt={`Avatar of ${author}`}
                className='avatar'
              />
            <span>by: {author}</span>
                <div>{formatDate(timestamp)}</div>
            </div>
            <table width="100%" className="question-votes; border-collapse: separate; border-spacing: 10px 20px;">
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th align="center">Votes</th>
                </tr>
                <tr>
                  <td>{optionOne.text}</td>
                  <td width="20%"></td>
                  <td align="center" className="one-circle">{optionOne.votes.length}</td>
                </tr>
                <tr>
                  <td>{optionTwo.text}</td>
                  <td width="20%"></td>
                  <td align="center" className="two-circle">{optionTwo.votes.length}</td>
                </tr>
              </tbody>
            </table>
        </Link>
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
