import { RECEIVE_USERS, UPDATE_USER_ANSWER, UPDATE_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case UPDATE_USER_ANSWER :
      return {
        ...state,
        users : {
          ...state.users,
          [action.authedUser] : {
            ...state.users[action.authedUser],
            answers: {
              ...state.users[action.authedUser].answers,
              [action.id] : action.answer
            }
          }
        }
      }
    case UPDATE_USER_QUESTION:
      return {
        ...state,
        users: {
          ...state.users,
          [action.authedUser]: {
            ...state.users[action.authedUser],
            questions: state.users[action.authedUser]
              .questions.concat(action.id)
          }
        }
      }
    default :
      return state
  }
}
