import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class User extends Component {

  render() {
    const { id, user, rank } = this.props
    console.log("The ID:"+JSON.stringify(id))
    console.log("The User:"+JSON.stringify(user))
    console.log("Rank:"+rank)

    if (user === null) {
      return <p>This User does not yet exist.</p>
    }

    const { name, avatarURL, answers, questions  } = user

    return (
        <Fragment>
          <div className="question">
            <div className='question-header'>
                <img
                  src={avatarURL}
                  alt={`Avatar of ${name}`}
                  className='avatar'
                />
              <span>{name}</span>
            </div>
            <div>
              <span>Number Asked: {questions.length}</span>
              <span>Number Answered: {Object.keys(answers).length}</span>
            </div>
          </div>
        </Fragment>
    )
  }
}

function mapStateToProps ({user, id, rank}) {
  return {
    user: user,
    id: id,
    rank: rank
  }
}

export default withRouter(connect(mapStateToProps)(User))
