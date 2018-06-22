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
    //TODO: not sure why I need to deconstruct this,
    // related to users.users issue with API
    {questions}
  })
}

export function saveNewQuestion(info) {
  return _saveQuestion(info)
  .then((question) => {
    return question
  })
}
