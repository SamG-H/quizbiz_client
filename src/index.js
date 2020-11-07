import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App'
import QuizForm from './components/QuizForm'
import Quiz from './components/Quiz'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render((
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/quizzes" component={Quiz} />
      <Route exact path="/quiz/new" component={QuizForm} />
    </div>
  </Router>
  </Provider>),
  document.getElementById('root')
);