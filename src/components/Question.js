import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Button, Label } from 'react-bootstrap'



class Question extends Component {

  handleVote = (e, value) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props

    dispatch(handleSaveQuestionAnswer({
      qid: question.id,
      authedUser: authedUser,
      answer: value
    }))
  }

  drawCheckmark = (option) => {
    const { question, authedUser } = this.props
    return question[option].votes.indexOf(authedUser) >= 0
  }

  render() {
    const { question, users, unanswered } = this.props

    if (question === undefined) {
      return <p>This Question does not yet exist.</p>
    }

    const { id, author, timestamp, optionOne, optionTwo  } = question


    return (
      <div className="question">
          <Link to={`/question/${id}`}>
            <div className='question-header'>
              <img
                src={users.users[author].avatarURL}
                alt={`Avatar of ${author}`}
                className='avatar'
              />
            <span>{author}</span>
                <div>{formatDate(timestamp)}</div>
            </div>
          </Link>
          <table width="100%" className="question-votes; border-collapse: separate; border-spacing: 10px 20px;">
            <tbody>
              <tr>
                { unanswered ?
                  <th>Would you rather?</th>
                  : <th>You would rather:</th>}
                { !unanswered ? <th align="center">Votes</th> : <th></th>}
              </tr>
              <tr>
                <td>{this.drawCheckmark('optionOne') ?
                    <img src='./static/checkmark.png' height="15" width="15" alt=''/>
                  : null }
                  {optionOne.text}
                </td>
                { unanswered ?
                  <td width="40%">
                    <Button bsStyle="primary" bsSize="small" onClick={(e) => this.handleVote(e, 'optionOne')}>Vote</Button>
                  </td>
                :
                <td width="40%">
                  <h4 align="center">
                    <Label bsSize="small">{optionOne.votes.length}</Label>
                  </h4>
                </td>
                }
              </tr>
              <tr>
                <td>{this.drawCheckmark('optionTwo') ?
                    <img src='./static/checkmark.png' height="15" width="15" alt=''/>
                  : null }
                  {optionOne.text}
                </td>
                  { unanswered ?
                    <td width="40%">
                      <Button bsStyle="danger" bsSize="small" onClick={(e) => this.handleVote(e, 'optionTwo')}>Vote</Button>
                    </td>
                  :
                  <td width="40%">
                    <h4 align="center">
                      <Label bsSize="small">{optionTwo.votes.length}</Label>
                    </h4>
                  </td>                  }
              </tr>
            </tbody>
          </table>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users}, { id }) {
  const question = questions.questions[id]

  return {
    authedUser: authedUser,
    users: users,
    question: question
  }
}

export default withRouter(connect(mapStateToProps)(Question))
