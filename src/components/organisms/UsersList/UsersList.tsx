import React, { useEffect, useState } from 'react'
import { users as usersData } from '../../../data/users'
import UsersListItem from '../../molecules/UsersListItem/UsersListItem'
import { StyledList, Wrapper } from './UsersList.styled'

interface IUsersList {
    name: string
    attendance: string
    average: number
}

const UsersList = () => {
    const [users, setUsers] = useState<IUsersList[]>(usersData)
    const [isLoading, setIsLoading] = useState([])

    const deleteUser = (name: string) => {
        const filteredUser = users.filter((user) => user.name !== name)
        setUsers(filteredUser)
    }

    return (
        <Wrapper>
            <StyledList>
                {users.map((userData, i) => (
                    <UsersListItem
                        index={i}
                        deleteUser={deleteUser}
                        key={userData.name}
                        name={userData.name}
                        attendance={userData.attendance}
                        average={userData.average}
                    />
                ))}
            </StyledList>
        </Wrapper>
    )
}

export default UsersList
