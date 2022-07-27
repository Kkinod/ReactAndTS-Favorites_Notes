import React from 'react'
import { users } from '../../data/users'
import UsersListItem from '../UsersListItem/UsersListItem'

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          // eslint-disable-next-line react/jsx-key
          <UsersListItem
            name={userData.name}
            attendance={userData.attendance}
            average={userData.average}
          />
        ))}
      </ul>
    </div>
  )
}

export default UsersList
