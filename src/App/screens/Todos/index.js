import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

import * as actions from 'App/stores/resources/actions'
import { getChildEntities } from 'App/stores/resources'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


const Todos = props => {
    const { todos, addTodo, toggleTodo } = props;
    var listID = props.params.id;

    var listedTodo = todos.filter(function (todo) {
        switch (props.params.filter) {
        case 'active':
          return !todo.completed;
        case 'done':
          return todo.completed;
        default:
          return true;
        }
      }, this);

    return (
      <section className='pa3 pa5-ns'>
        <AddTodo onSubmit={({todo}, _, {reset}) => {
          addTodo(todo, listID)
          reset()
        }} />

        <h1 className='f4 bold center mw6'>All Todos</h1>
        <Link to ={`/list/${listID}/all`} ><button>All</button></Link>
        <Link to ={`/list/${listID}/active`} ><button>Active</button></Link>
        <Link to ={`/list/${listID}/done`} ><button>Done</button></Link>
        <TodoList {...{ listedTodo, toggleTodo }} />
      </section>
    )
}
Todos.propTypes = {
  todos: PropTypes.array
}

export default connect(
  (state, props) => ({
    todos: getChildEntities('todos','list',props.params.id)(state)
  }),
  dispatch => ({
    addTodo: (text, listID) => dispatch(actions.submitEntity({ text, listID }, {type: 'todos'})),
    toggleTodo: (todo, completed) => dispatch(actions.updateEntity({ ...todo, completed }, {type: 'todos'}))
  })
)(Todos)
