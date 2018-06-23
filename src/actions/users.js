export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_QUESTION = 'UPDATE_USER_QUESTION'


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
