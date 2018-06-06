import {
  _getUsers,
  _getQuestions,
//  _saveQuestion,
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

// export function saveLikeToggle (info) {
//   return _saveLikeToggle(info)
// }
//
// export function saveTweet (info) {
//   return _saveTweet(info)
// }
