import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import * as actions from 'App/stores/resources/actions'
import { getEntities } from 'App/stores/resources'

import AddList from './components/AddList'
import ListItem from './components/ListItem'

const Lists = props => {
    const { lists, addList } = props;
  return (
    <section className='pa3 pa5-ns'>
      <h1 className='f4 bold center mw6'>All Lists</h1>
      <AddList onSubmit={({list}, _, {reset}) => {
        addList(list)
        reset()
      }} />
      <ListItem {...{ lists }} />
    </section>
  )
}

Lists.propTypes = {
  lists: PropTypes.array
}

export default connect(
  (state,props) => ({
    lists: getEntities('list')(state)
  }),
  dispatch => ({
    addList: (name) => dispatch(actions.submitEntity({ name }, {type: 'list'}))
  })
)(Lists)
