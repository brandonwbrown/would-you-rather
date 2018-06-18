import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_4_QUESTION = 'VOTE_4_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function voteForQuestion ({ qid, authedUser, answer}) {
  return {
    type: VOTE_4_QUESTION,
    qid,
    authedUser,
    answer
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
