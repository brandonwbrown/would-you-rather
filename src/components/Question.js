import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate, formatQuestion } from '../utils/helpers'


class Question extends Component {

  render() {
    const { q } = this.props
    const { id, author, timestamp, optionOne, optionTwo  } = q
    console.log("in question:"+JSON.stringify(q))

    if (q === null) {
      return <p>This Question does not yet exist.</p>
    }

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

function mapStateToProps ({ q, authedUser }) {
  return {
    authedUser: authedUser,
    q: q
          ? formatQuestion(q.optionOneText, q.optionTwoText, q.author)
          : null
  }
}

export default withRouter(connect(mapStateToProps)(Question))
