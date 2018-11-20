import * as types from '../actions/constants'


export default (state = [], { type, payload }) => {
  switch(type) {
    case types.LOAD_FILM_CHARACTER_REQUEST:
      return state
    case types.LOAD_FILM_CHARACTER_SUCCESS:
      return [...state, payload]
    case types.LOAD_FILM_CHARACTER_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}