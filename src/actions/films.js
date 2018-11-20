import * as types from './constants'

export function loadFilms() {
  return {
    type: types.ALL_FILMS_REQUEST
  }
}