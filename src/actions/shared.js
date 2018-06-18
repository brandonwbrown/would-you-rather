import { getInitialData, getInitialUsers, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, updateUserAnswer } from '../actions/users'
import { receiveQuestions, handleVote } from '../actions/questions'
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

export function handleSaveQuestionAnswer (info){
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(handleVote(info))
    dispatch(updateUserAnswer(info))
    return saveQuestionAnswer(info)
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
