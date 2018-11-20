import * as types from '../actions/constants'

const initialState = {
  loading: false,
  count: null,
  next: null,
  previous: null,
  results: [],
  error: null
}

// const sortByName = (results) => {
//   let sorted = [...results]
//   sorted.sort((a, b) => {
//     return a.name.localeCompare(b.name)
//   })
//   return sorted
// }

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case types.ALL_PEOPLE_REQUEST:
      return { ...state, loading: true }
    case types.ALL_PEOPLE_SUCCESS:
      const { count, next, previous, results } = payload

      return { 
        ...state,
        loading: false,
        count,
        next: next && next.split("/").slice(-1)[0],
        previous: previous && previous.split("/").slice(-1)[0],
        results
      }
    case types.ALL_PEOPLE_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}