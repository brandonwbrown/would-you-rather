import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'


class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChange = (option, e) => {
    const text = e.target.value

    this.setState(() => ({
      [option]: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

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
          <div>
            <h3 className='center'>Would You Rather...</h3>
            <form className='new-question' onSubmit={this.handleSubmit}>
              <label>Option 1</label><textarea
                placeholder="Option 1 text"
                value={this.state.optionOneText}
                onChange={(e) => this.handleChange('optionOneText', e)}
                className='textarea'
                maxLength={280}
              />
            <label>Option 2</label><textarea
                placeholder="Option 2 text"
                value={this.state.optionTwoText}
                onChange={(e) => this.handleChange('optionTwoText', e)}
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
