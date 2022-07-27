import React from 'react'

interface IUsersList {
  name: string
  attendance: string
  average: string
}

const UsersListItem = ({ name, attendance, average }: IUsersList) => {
  return (
    <li key={name}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>x</button>
    </li>
  )
}

export default UsersListItem
