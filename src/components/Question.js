import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate, formatQuestion } from '../utils/helpers'


class Question extends Component {

  render() {
    const { question } = this.props
    console.log(JSON.stringify(question))
    const { id, author, timestamp, optionOne, optionTwo  } = question ? question : null
    console.log("in question:"+JSON.stringify(question))

    if (question === null) {
      return <p>This Question does not yet exist.</p>
    }

    return (
      // <Fragment>
        <div className='question'>
          <p>A Question instance {question}</p>
        </div>
      // <Link to={`/question/${id}`} className='question'>
        //   <img
        //     src={author.avatar}
        //     alt={`Avatar of ${author}`}
        //     className='avatar'
        //   />
        //   <div className='question-info'>
        //     <span>{author}</span>
        //     <div>{formatDate(timestamp)}</div>
        //     <p>Option One: {optionOne.text}</p>
        //     <p>Option Two: {optionTwo.text}</p>
        //   </div>
        // </Link>
      // </Fragment>
    )
  }
}

function mapStateToProps ({ question, authedUser }) {
  return {
    authedUser: authedUser,
    question: question
          ? formatQuestion(question.optionOneText, question.optionTwoText, question.author)
          : null
  }
}

export default withRouter(connect(mapStateToProps)(Question))
