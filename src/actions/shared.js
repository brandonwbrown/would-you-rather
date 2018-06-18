import { getInitialData, getInitialUsers, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from '../actions/users'
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
  console.log("Info is:"+JSON.stringify(info))
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(handleVote(info)) // update store
    return saveQuestionAnswer(info) //API call
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
