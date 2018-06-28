import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate, getPercent } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Button, Label } from 'react-bootstrap'


class Question extends Component {

  handleVote = (e, value) => {
    e.preventDefault()

    const { dispatch, id, authedUser } = this.props

    dispatch(handleSaveQuestionAnswer({
      id: id,
      authedUser: authedUser,
      answer: value
    }))
  }

  drawCheckmark = (option) => {
    const { authedUser, question } = this.props
    return question[option].votes.indexOf(authedUser) >= 0
  }

  render() {
    const { question, users, unanswered } = this.props

    if (question === null) {
      return <p>This Question does not yet exist.</p>
    }

    const { id, author, timestamp, optionOne, optionTwo  } = question
    const optionOnePercent = getPercent(
                                    optionOne.votes.length,
                                    optionTwo.votes.length)
    const optionTwoPercent = 100 - optionOnePercent

    return (
      <div className="question">
          <Link to={`/question/${id}`} className="question">
            <div className='question-header'>
              <img
                src={users[author].avatarURL}
                alt={`Avatar of ${author}`}
                className='avatar'
              />
            <span>{author}</span>
                <div>{formatDate(timestamp)}</div>
            </div>
          <table width="100%" className="question-votes; border-collapse: separate; border-spacing: 10px 20px;">
            <tbody>
              <tr>
                { unanswered ?
                    <th>Would you rather?</th>
                    :
                    <th>You would rather:</th>
                }
                { unanswered ?
                    <th></th>
                    :
                    <th align="center">Votes | %</th>
                }
              </tr>
              <tr>
                <td>{this.drawCheckmark('optionOne') ?
                    <img src={require('../static/checkmark.png')} height="15" width="15" alt=''/>
                  : null }
                  {optionOne.text}
                </td>
                { unanswered ?
                  <td width="40%">
                    <Button
                      bsStyle="primary"
                      bsSize="small"
                      onClick={(e) => this.handleVote(e, 'optionOne')}>
                      Vote
                    </Button>
                  </td>
                :
                <td width="40%">
                  <h4 align="center">
                    <Label bsSize="small">{optionOne.votes.length} | {optionOnePercent}%</Label>
                  </h4>
                </td>
                }
              </tr>
              <tr>
                <td>{this.drawCheckmark('optionTwo') ?
                    <img src={require('../static/checkmark.png')} height="15" width="15" alt=''/>
                  : null }
                  {optionTwo.text}
                </td>
                  { unanswered ?
                    <td width="40%">
                      <Button
                        bsStyle="danger"
                        bsSize="small"
                        onClick={(e) => this.handleVote(e, 'optionTwo')}>
                        Vote
                      </Button>
                    </td>
                  :
                  <td width="40%">
                    <h4 align="center">
                      <Label bsSize="small">{optionTwo.votes.length} | {optionTwoPercent}%</Label>
                    </h4>
                  </td>                  }
              </tr>
            </tbody>
          </table>
        </Link>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users}, { id }) {
  const question = questions[id]

  return {
    authedUser: authedUser,
    users: users,
    question: question
  }
}

export default withRouter(connect(mapStateToProps)(Question))
