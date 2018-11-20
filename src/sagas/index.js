import { all } from 'redux-saga/effects'

import { watcherFilms } from './films'

export default function* rootSaga() {
  yield all([
    watcherFilms()
  ])
}