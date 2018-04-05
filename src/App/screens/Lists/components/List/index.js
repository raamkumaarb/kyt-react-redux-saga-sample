import React, { PropTypes } from 'react'
import { Link } from 'react-router';

import classNames from 'classnames'

const List = ({ name, isLast, id }) => {
  const listClass = classNames(
    'ph3 pv3 pointer bg-animate hover-bg-light-gray',
    {
      'bb b--light-silver': !isLast
    }
  )

  return (
    <Link to ={`/list/${id}`}>
      <li className={listClass}>{name}</li>
    </Link>
  )
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  isLast: PropTypes.bool
}

export default List
