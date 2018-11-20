import * as types from './constants'

export function loadFilms() {
  return {
    type: types.ALL_FILMS_REQUEST
  }
}

export function loadFilm(id) {
  
  return {
    type: types.SINGLE_FILM_REQUEST,
    payload: id
  }
}

export function clearFilm() {
  return {
    type: types.CLEAR_FILM
  }
}