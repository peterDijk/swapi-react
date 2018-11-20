import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as types from '../actions/constants'

export function* watcherPeople() {
  yield takeLatest(types.ALL_PEOPLE_REQUEST, loadPeopleSaga)
}

function fetchFromApi(url) {
  return axios({
    method: 'get',
    url
  })
}

function* loadPeopleSaga(action) {
  try {
    const response = yield call(fetchFromApi, 'https://swapi.co/api/people/')
    const people = response.data
    console.log(people)
    
    yield put({ type: types.ALL_PEOPLE_SUCCESS, payload: people })
  } catch (error) {
    yield put({ type: types.ALL_PEOPLE_FAILURE, payload: error })
  }
}