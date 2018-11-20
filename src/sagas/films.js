import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as types from '../actions/constants'

export function* watcherFilms() {
  yield takeLatest(types.ALL_FILMS_REQUEST, loadFilmsSaga)
}

function fetchFromApi(url) {
  return axios({
    method: 'get',
    url
  })
}

function* loadFilmsSaga(action) {
  try {
    const response = yield call(fetchFromApi, 'https://swapi.co/api/films/')
    const films = response.data
    
    yield put({ type: types.ALL_FILMS_SUCCESS, payload: films })
  } catch (error) {
    yield put({ type: types.ALL_FILMS_FAILURE, payload: error })
  }
}