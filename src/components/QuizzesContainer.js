import React, { Component } from 'react'
import QuizForm from './QuizForm'
import { connect } from 'react-redux'
import { fetchQuizzes } from '../actions/quizActions'

class QuizzesContainer extends Component {
  render() {
    return (
      <div>
        <QuizForm />
      </div>
    )
  }
}

export default connect(null, { fetchQuizzes })(QuizzesContainer)