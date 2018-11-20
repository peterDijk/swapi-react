import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as types from '../actions/constants'

export function* watcherFilm() {
  yield takeLatest(types.SINGLE_FILM_REQUEST, loadFilmSaga)
}

function fetchFromApi(url) {
  return axios({
    method: 'get',
    url
  })
}

function* loadFilmSaga(action) {
  try {
    const response = yield call(fetchFromApi, `https://swapi.co/api/films/${action.payload}`)
    const film = response.data
    
    yield put({ type: types.SINGLE_FILM_SUCCESS, payload: film })
  } catch (error) {
    yield put({ type: types.SINGLE_FILM_FAILURE, payload: error })
  }
}