import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
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

export function saveQuestionAnswer(info) {
  return Promise.all([
    _saveQuestionAnswer(info),
  ]).then(([questions]) => {
    {questions}
  })
}

export function saveNewQuestion(info) {
  return Promise.all([
    _saveQuestion(info),
  ])
  .then(_getQuestions())
  .then(([questions]) => {
    {questions}
  })
}
