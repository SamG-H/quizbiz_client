import React, { Component } from 'react'

export default class AnswerForm extends Component {
  state = {
    content: '',
    isCorrect: false,
    answers: []
  }

  handleChange = e => {
    const {name, value, checked} = e.target

    if(name === 'isCorrect') {
      this.setState({
        [name] : checked
      })
    }
    else {
      this.setState({
        [name]: value
      })
    }
  }

  render() {
    return (
      <div>
        <label>A{this.props.aNumber}</label>
        <input type='text' onChange={this.handleChange} name='content' placeholder='Type your answer'/>
        <input type='checkbox' onChange={this.handleChange} name='isCorrect' />
      </div>
    )
  }
}
