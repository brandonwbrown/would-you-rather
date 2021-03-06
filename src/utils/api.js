import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions(),
  ]).then(questions => questions[0]) //handle nested return
}

export function getInitialUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(users => users[0]) //handle nested return
}

export function saveQuestionAnswer(info) {
  return Promise.all([
    _saveQuestionAnswer(info),
  ]).then(questions => questions[0])
}

export function saveNewQuestion(info) {
  return _saveQuestion(info)
  .then((question) => {
    return question
  })
}
