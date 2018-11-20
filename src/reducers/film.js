import * as types from '../actions/constants'

const initialState = {
  loading: false,
  data: null
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case types.SINGLE_FILM_REQUEST:
      return { ...state, loading: true }
    case types.SINGLE_FILM_SUCCESS:
      return { 
        ...state,
        loading: false,
        data: payload
      }
    case types.SINGLE_FILM_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}