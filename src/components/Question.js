import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate, formatQuestion } from '../utils/helpers'


class Question extends Component {

  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question does not yet exist.</p>
    }

    const { id, author, timestamp, optionOne, optionTwo  } = question

    return (
      <Link to={`/question/${id}`} className='question'>
        <img
          src={author.avatar}
          alt={`Avatar of ${author}`}
          className='avatar'
        />
        <div className='question-info'>
          <span>{author}</span>
          <div>{formatDate(timestamp)}</div>
          <p>Option One: {optionOne.text}</p>
          <p>Option Two: {optionTwo.text}</p>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ questions, authedUser }, { id }) {
  const { question } = questions[id]
  return {
    authedUser: authedUser,
    question: question
          ? formatQuestion(question.optionOneText, question.optionTwoText, question.author)
          : null
  }
}

export default withRouter(connect(mapStateToProps)(Question))
