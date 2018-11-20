import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as types from '../actions/constants'

export function* watcherPeople() {
  yield takeLatest(types.ALL_PEOPLE_REQUEST, loadPeopleSaga)
  yield takeLatest(types.LOAD_FILM_CHARACTER_REQUEST, loadFilmCharSaga)
}

function fetchFromApi(url) {
  return axios({
    method: 'get',
    url
  })
}

function* loadPeopleSaga(action) {
  
  try {
    const response = yield call(fetchFromApi, `https://swapi.co/api/people/?${action.payload}`)
    const people = response.data
    
    yield put({ type: types.ALL_PEOPLE_SUCCESS, payload: people })
  } catch (error) {
    yield put({ type: types.ALL_PEOPLE_FAILURE, payload: error })
  }
}

function* loadFilmCharSaga(action) {
  
  try {
    const response = yield call(fetchFromApi, action.payload)
    const char = response.data
    
    yield put({ type: types.LOAD_FILM_CHARACTER_SUCCESS, payload: char })
  } catch (error) {
    yield put({ type: types.LOAD_FILM_CHARACTER_FAILURE })
  }
}