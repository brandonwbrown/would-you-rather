import {
  _getUsers,
  _getQuestions,
// TODO  _saveQuestion,
//  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions(),
  ]).then(([questions]) => ({
    questions
  }))
}

export function getInitialUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
      users
     }))
}
