import React, { PropTypes } from 'react'

import List from '../List'

const sortByDate = (arr) => arr.sort((a, b) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.createdAt) - new Date(a.createdAt)
})

const ListItem = ({ lists }) => {
  const sortedLists = lists && lists[0] ? sortByDate(lists) : null

  return (
    <ul className='list pl0 ml0 center mw6 ba b--light-silver br2'>
      {sortedLists
        ? lists.map((list, i) =>
          <List
            key={i}
            {...list}
          />
        )
        : <p className='ph3 pv3 tc'>No lists found</p>
      }
    </ul>
  )
}

ListItem.propTypes = {
  lists: PropTypes.array
}

export default ListItem
