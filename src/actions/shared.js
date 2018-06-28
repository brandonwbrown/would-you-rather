import { getInitialData, getInitialUsers, saveQuestionAnswer, saveNewQuestion } from '../utils/api'
import { receiveUsers, updateUserAnswer, updateUserQuestion } from '../actions/users'
import { receiveQuestions, handleVote, addQuestion } from '../actions/questions'
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

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveNewQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(updateUserQuestion(question.id, authedUser))
      })
      .then(() => dispatch(hideLoading()))
  }
}
