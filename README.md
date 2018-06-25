# Would You Rather

This project is a proof-of-concept game that demonstrates complex state management in a React-Redux store. You can login as one of 3 users and vote on questions, create questions, as well as look at history. The datastore API is static and resets on reloads. Deatiled project specs are outlined below.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have installed the latest npm. If you don't have it, go ahead and grab it [here](https://nodejs.org/). Then clone this repository.

### Install Dependencies

`npm install`

### Start development server

`npm start`

## Navigating

Preset users are logged in by a pulldown. The Nav bar will take you to where you want to go. Leaderboard ranks by sum of questions written and answers posted.

## Tests

There are currently no tests for this project yet.

## Deployment

This project has not yet been deployed.

## Directory Structure

```
├── README.md
├── Would\ You\ Rather\ Specs.pdf
├── WouldYouRather-ComponentDiagram.xd
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    │   ├── authedUser.js
    │   ├── questions.js
    │   ├── shared.js
    │   └── users.js
    ├── components
    │   ├── App.js
    │   ├── Dashboard.js
    │   ├── HomePage.js
    │   ├── Leaderboard.js
    │   ├── Login.js
    │   ├── Nav.js
    │   ├── NewQuestion.js
    │   ├── NotFound.js
    │   ├── Question.js
    │   ├── QuestionPage.js
    │   └── User.js
    ├── index.css
    ├── index.js
    ├── middleware
    │   ├── index.js
    │   └── logger.js
    ├── reducers
    │   ├── authedUser.js
    │   ├── index.js
    │   ├── questions.js
    │   └── users.js
    ├── static
    │   └── checkmark.png
    └── utils
        ├── _DATA.js
        ├── api.js
        └── helpers.js
```

## Issues

Two TODO issues exist:
1) react nested routing doesn't allow 404 page renders
2) it's not so pretty, will revamp with react-bootstrap

## Acknowledgments

Special thanks to Tyler McGinnis for the great course
Special thanks to the code reviewers, students, and mentors at Udacity
