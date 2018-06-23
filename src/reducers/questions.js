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
         questions: {
           ...state.questions,
           [action.id]: {
             ...state.questions[action.id],
             [action.answer] : {
               ...state.questions[action.id][action.answer],
               votes: state
                .questions[action.id][action.answer]
                .votes.concat(action.authedUser)
             }
           }
         }
       }
     case ADD_QUESTION:
       return {
         ...state,
         questions: {
           ...state.questions,
           [action.question.id]: action.question
         }
       }
    default :
      return state
  }
}
