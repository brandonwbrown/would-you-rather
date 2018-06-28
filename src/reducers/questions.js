import { RECEIVE_QUESTIONS, VOTE_4_QUESTION, ADD_QUESTION } from '../actions/questions'

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
         [action.id]: {
           ...state[action.id],
           [action.answer] : {
             ...state[action.id][action.answer],
             votes: state[action.id][action.answer]
              .votes.concat(action.authedUser)
           }
         }
       }
     case ADD_QUESTION:
      return {
         ...state,
         [action.question.id]: action.question
      }
    default :
      return state
  }
}
