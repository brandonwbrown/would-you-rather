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
         questions: {
           ...state.questions,
           [action.qid]: {
             ...state.questions[action.qid],
             [action.answer] : {
               ...state.questions[action.qid][action.answer],
               votes: state
                .questions[action.qid][action.answer]
                .votes.concat(action.authedUser)
             }
           }
         }
       }
    default :
      return state
  }
}
