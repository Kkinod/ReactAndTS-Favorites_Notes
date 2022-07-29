import React from 'react'
import { users } from '../../../data/users'
import UsersListItem from '../../molecules/UsersListItem/UsersListItem'
import { Wrapper, StyledList } from './UsersList.styled'

const UsersList = () => {
    return (
        <Wrapper>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItem key={userData.name} name={userData.name} attendance={userData.attendance} average={userData.average} />
                ))}
            </StyledList>
        </Wrapper>
    )
}

export default UsersList
