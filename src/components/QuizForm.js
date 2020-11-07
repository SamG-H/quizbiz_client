import React, { Component } from 'react'

export default class QuizForm extends Component {
  state = {
    title: '',
    author: '',
    questions: []
  }
  
  handleChange = e => {
    const {name, value} = e.target

    this.setState({
      [name]: value
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

          <input type="submit" value="Create Quiz" />
        </form>
      </div>
    )
  }
}
