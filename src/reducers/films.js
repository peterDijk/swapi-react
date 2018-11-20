import * as types from '../actions/constants'

const initialState = {
  loading: false,
  count: null,
  next: null,
  previous: null,
  results: [],
  error: null
}

const sortByReleaseDate = (results) => {
  let sorted = [...results]
  sorted.sort((a, b) => {
    return a.release_date.localeCompare(b.release_date)
  })
  return sorted
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case types.ALL_FILMS_REQUEST:
      return { ...state, loading: true }
    case types.ALL_FILMS_SUCCESS:
      const { count, next, previous, results } = payload
      return { 
        ...state,
        loading: false,
        count,
        next,
        previous,
        results: sortByReleaseDate(results)
      }
    case types.ALL_FILMS_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}