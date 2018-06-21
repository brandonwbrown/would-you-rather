import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import { getInitialData } from '../utils/api'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import PropTypes from 'prop-types'


class NewQuestion extends Component {

  static propTypes = {
    authedUser: PropTypes.string.isRequired,
  }

  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleOneChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionOneText: text
    }))
  }

  handleTwoChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionTwoText: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser, id } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: id ? false : true, //TODO toHome always true
    }))
  }

  render() {
    const { authedUser } = this.props
    const { toHome, optionOneText, optionTwoText } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        {authedUser ?
          <Fragment>
            <div>
              <h3 className='center'>Would You Rather...</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                  <label>Option 1</label><textarea
                    placeholder="Option 1 text"
                    value={this.state.optionOneText}
                    onChange={this.handleOneChange}
                    className='textarea'
                    maxLength={280}
                  />
                <label>Option 2</label><textarea
                    placeholder="Option 2 text"
                    value={this.state.optionTwoText}
                    onChange={this.handleTwoChange}
                    className='textarea'
                    maxLength={280}
                  />
                  <button
                    className='btn'
                    type='submit'
                    disabled={optionOneText === '' || optionTwoText === ''}>
                      Submit
                  </button>
                </form>
            </div>
          </Fragment>
          :
          <Redirect to='/login' />
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
