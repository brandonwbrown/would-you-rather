import { RECEIVE_QUESTIONS, VOTE_4_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case VOTE_4_QUESTION:
      return {
        ...state,
        ...action.questions
      }
    default :
      return state
  }
}
