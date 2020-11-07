import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App'
import QuizForm from './components/QuizForm'
import Quiz from './components/Quiz'

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/quizzes" component={Quiz} />
      <Route exact path="/quiz/new" component={QuizForm} />
    </div>
  </Router>),
  document.getElementById('root')
);