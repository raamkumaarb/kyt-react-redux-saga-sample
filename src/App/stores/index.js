import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import todos from './todos'
import list from './list'

export default combineReducers({
  todos,
  list,
  form: formReducer
})
