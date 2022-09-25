import React from 'react';
import PropTypes from 'prop-types'
import UserItem from './UserItem'

const Users = ({users}) => {
  return (
    <div style={UserStyle}>
      {users.map(user =>
        <UserItem key={user.id} user={user} />
      )}
    </div>
  )
}

const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users