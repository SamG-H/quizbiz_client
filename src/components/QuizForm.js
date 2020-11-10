import React, { Component } from 'react'

export default class QuizForm extends Component {
  state = {
    title: '',
    author: '',
    questions: [],
    answers: []
  }
  
  handleChange = e => {
    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick = e => {
    e.preventDefault()
    const questions = this.state.questions.concat(`${this.state.questions.length}`)
    this.setState({
      questions
    })
  }

  handleSubmit = e =>  {
    e.preventDefault()
    console.log(this.state)
  }

  createAnswerField = e => {
    console.log(this.state.answers.length)
    e.preventDefault()
    const answers = this.state.answers.concat(`${this.state.answers.length}`)
    this.setState({
      answers
    })
  }
  
  render() {
    return (
      <div>
        <h1>Create a New Quiz!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
          <br />

          <label>Author</label>
          <input type='text' name='author' value={this.state.author} onChange={this.handleChange} />
          <br />
          <label>Questions:</label>
          {this.state.questions.map( qNumber => {
            return (
            <div>
              <label>Q{qNumber}</label>
              <input type='text' onChange={this.handleChange} name='content' placeholder='Type your question'/>
              <br />
              <label>Answers:</label>
              <button onClick={this.createAnswerField}>Add Answer</button><br />
        {this.state.answers.map( aNumber => {
          return(
          <div>
          <label>A{this.props.aNumber}</label>
          <input type='text' onChange={this.handleChange} name='content' placeholder='Type your answer'/>
          <input type='checkbox' onChange={this.handleChange} name='isCorrect' />
          </div>
          )
        })}
            </div>)
          })}
          <button onClick={this.handleClick}>Add Question</button><br />
          <input type="submit" value="Create Quiz" />
        </form>
      </div>
    )
  }
}
