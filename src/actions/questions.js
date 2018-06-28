import { saveQuestionAnswer } from '../utils/api'
import { RECEIVE_QUESTIONS, VOTE_4_QUESTION, ADD_QUESTION } from './actionTypes'


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

export function handleVote (info) {
  return (dispatch) => {
    dispatch(voteForQuestion(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleVote: ', e)
        //dispatch(restoreQuestion(info))
        // TODO on API error we need to revert the question back to original state
        alert('The was an error voting on the question. Try again.')
      })
  }
}
