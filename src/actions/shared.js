import { getInitialData, getInitialUsers, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
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
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleSaveQuestionAnswer (){
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
