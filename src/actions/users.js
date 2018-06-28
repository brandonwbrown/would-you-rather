import { RECEIVE_USERS, UPDATE_USER_ANSWER, UPDATE_USER_QUESTION } from './actionTypes'


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUserAnswer ({ id, authedUser, answer}) {
  return {
    type: UPDATE_USER_ANSWER,
    id,
    authedUser,
    answer
  }
}

export function updateUserQuestion (id, authedUser) {
  return {
    type: UPDATE_USER_QUESTION,
    id,
    authedUser
  }
}
