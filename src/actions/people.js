import * as types from './constants'

export function loadPeople(query) {
  return {
    type: types.ALL_PEOPLE_REQUEST,
    payload: query
  }
}