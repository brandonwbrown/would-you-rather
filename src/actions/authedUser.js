import { SET_AUTHED_USER, LOG_OUT } from './actionTypes'


export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function Logout () {
  return {
    type: LOG_OUT
  }
}
