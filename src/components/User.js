import React, { Component, Fragment } from 'react'


class User extends Component {

  render() {
    const { user, rank } = this.props

    if (user === undefined) {
      return <p>This User does not yet exist.</p>
    }

    const { name, avatarURL, answers, questions  } = user

    return (
        <Fragment>
          <div className='rank'>
            <div className='rank-number'>
              <span>Rank:<br></br></span>
              <span>{rank}</span>
            </div>
              <div className='rank-header'>
                <img
                  src={avatarURL}
                  alt={`Avatar of ${name}`}
                  className='avatar'
                />
                <p>{name}</p>
              </div>
              <div className='rank-details'>
                <p>Questions Asked: {questions.length}</p>
                <p>Questions Answered: {Object.keys(answers).length}</p>
                <p>Total: {Object.keys(answers).length + questions.length}</p>
              </div>
            </div>
        </Fragment>
    )
  }
}

export default (User)
