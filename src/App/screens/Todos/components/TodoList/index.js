import React, { PropTypes } from 'react'

import Todo from '../Todo'

const sortByDate = (arr) => arr.sort((a, b) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.createdAt) - new Date(a.createdAt)
})

const TodoList = ({ listedTodo, toggleTodo }) => {
  const sortedTodos = listedTodo && listedTodo[0] ? sortByDate(listedTodo) : null

  return (
    <ul className='list pl0 ml0 center mw6 ba b--light-silver br2'>
      {sortedTodos
        ? listedTodo.map((todo, i) =>
          <Todo
            key={i}
            {...todo}
            toggle={() => toggleTodo(todo, !todo.completed)}
            isLast={(listedTodo.length - 1) === i}
          />
        )
        : <p className='ph3 pv3 tc'>No todos found</p>
      }
    </ul>
  )
}

TodoList.propTypes = {
  listedTodo: PropTypes.array
}

export default TodoList
