import { FETCH_TEST } from './types'

export const fetchTest = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({type: FETCH_TEST, payload: posts}))
}
