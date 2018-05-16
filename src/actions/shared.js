import { getInitialData, getInitialUsers } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialUsers (){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ questions }) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
