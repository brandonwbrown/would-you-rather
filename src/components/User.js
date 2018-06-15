import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    rank: PropTypes.number.isRequired
  }

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
              </div>
            </div>
        </Fragment>
    )
  }
}

export default (User)
