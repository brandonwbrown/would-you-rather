import { saveQuestionAnswer, saveNewQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_4_QUESTION = 'VOTE_4_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function voteForQuestion ({ id, authedUser, answer}) {
  return {
    type: VOTE_4_QUESTION,
    id,
    authedUser,
    answer
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    console.log(optionOneText+" "+optionTwoText+" "+authedUser)
    return saveNewQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleVote (info) {
  return (dispatch) => {
    dispatch(voteForQuestion(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleVote: ', e)
        // TODO on API error we need to revert the question back to original state
        alert('The was an error voting on the question. Try again.')
      })
  }
}
