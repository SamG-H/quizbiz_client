import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App'

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/quizzes" component={Quizzes} />
      <Route exact path="/quiz/new" component={QuizForm} />
    </div>
  </Router>),
  document.getElementById('root')
);