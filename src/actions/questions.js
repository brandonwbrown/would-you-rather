//import { saveLikeToggle, saveQuestion } from '../utils/api'
//import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
// export const ADD_QUESTION = 'ADD_QUESTION'
//
// function addQuestion (question) {
//   return {
//     type: ADD_QUESTION,
//     question,
//   }
// }

// TODO: change to AddQuestion
// export function handleAddTweet (text, replyingTo) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState()
//
//     dispatch(showLoading())
//
//     return saveTweet({
//       text,
//       author: authedUser,
//       replyingTo
//     })
//       .then((tweet) => dispatch(addTweet(tweet)))
//       .then(() => dispatch(hideLoading()))
//   }
// }

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

// TODO: probably don't need this
// function toggleTweet ({ id, authedUser, hasLiked }) {
//   return {
//     type: TOGGLE_TWEET,
//     id,
//     authedUser,
//     hasLiked
//   }
// }
// TODO this will be answerQuestion
// export function handleToggleTweet (info) {
//   return (dispatch) => {
//     dispatch(toggleTweet(info))
//
//     return saveLikeToggle(info)
//       .catch((e) => {
//         console.warn('Error in handleToggleTweet: ', e)
//         dispatch(toggleTweet(info))
//         alert('The was an error liking the tweet. Try again.')
//       })
//   }
// }
