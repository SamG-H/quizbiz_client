import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      quizzes: []
    }
  }

  fetchQuizzes = () => {
    fetch('http://localhost:3000/quizzes')
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  componentDidMount() {
    this.fetchQuizzes();
  }

  handleClick = () => {
    console.log(this.state.quizzes);
  }

  render() {
    return (
      <div>
        <h1>Welcome To QuizBiz</h1>
        <button onClick={this.handleClick}>View Quizzes</button>
        <button onClick={this.handleClick}>Create A Quiz</button>
        <button onClick={this.handleClick}>Take A Random Quiz</button>
      </div>
    )
  }
}
