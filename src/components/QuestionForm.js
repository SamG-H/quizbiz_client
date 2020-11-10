import React, { Component } from 'react'
import AnswerForm from './AnswerForm'

export default class QuestionForm extends Component {
  state = {
    content: '',
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
    const answers = this.state.answers.concat(`${this.state.answers.length}`)
    this.setState({
      answers
    })
  }

  render() {
    return (
      <div>
        <label>Q{this.props.qNumber}</label>
        <input type='text' onChange={this.handleChange} name='content' placeholder='Type your question'/>
        <br />

        <label>Answers:</label>
        {this.state.answers.map( aNumber => {
            return <AnswerForm aNumber={aNumber} />
          })}

        <button onClick={this.handleClick}>Add Answer</button><br />
      </div>
    )
  }
}
