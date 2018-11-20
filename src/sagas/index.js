import { all } from 'redux-saga/effects'

import { watcherFilms } from './films'
import { watcherFilm } from './film'
import { watcherPeople } from './people'

export default function* rootSaga() {
  yield all([
    watcherFilms(),
    watcherFilm(),
    watcherPeople()
  ])
}