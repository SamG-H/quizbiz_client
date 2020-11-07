export const fetchQuizzes = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/quizzes')
    .then(r => r.json())
    .then(quizzes => {
      return dispatch({ type: 'FETCH_QUIZZES', payload: quizzes})
    })
  }
}
