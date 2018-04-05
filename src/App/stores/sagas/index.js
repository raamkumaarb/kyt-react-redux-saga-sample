import { fork } from 'redux-saga/effects'

import watchTodos from '../todos/sagas'
import watchList from '../list/sagas'

export default function* sagas () {
  yield [
    fork(watchList),
    fork(watchTodos),
  ]
}
