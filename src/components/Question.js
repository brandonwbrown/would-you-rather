import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { formatDate } from '../utils/helpers'


class Question extends Component {

  render() {
    const { question } = this.props
    const { id, author, timestamp, optionOne, optionTwo  } = question
    console.log("rendering question ID:" + id)

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

function mapStateToProps ({ question, authedUser }) {
  return {
    question: question,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Question)
