import * as types from '../actions/constants'

const initialState = {
  loading: false,
  count: null,
  next: null,
  previous: null,
  results: [],
  error: null
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
        results
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