import * as types from './constants'

export function loadPeople(query) {
  return {
    type: types.ALL_PEOPLE_REQUEST,
    payload: query
  }
}

export function loadFilmCharacter(url) {
  console.log(url)
  return {
    type: types.LOAD_FILM_CHARACTER_REQUEST,
    payload: url
  }
}

export function clearFilmCharacters() {
  return {
    type: types.CLEAR_FILM_CHARACTERS
  }
}