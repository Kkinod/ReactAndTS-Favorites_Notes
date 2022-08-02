import React from 'react'
import UsersListItem from '../../molecules/UsersListItem/UsersListItem'
import { IUsersList } from '../../../views/App'
import StyledList from './UsersList.styled'
import Title from '../../atoms/Title/Title'

interface IUsersListProps {
    users: IUsersList[]
    deleteWorker: (name: string) => void
}

const UsersList = ({ users, deleteWorker }: IUsersListProps) => {
    return (
        <>
            <Title>Worker list</Title>
            <StyledList>
                {users.map((userData, i) => (
                    <UsersListItem
                        index={i}
                        deleteWorker={deleteWorker}
                        key={userData.name}
                        name={userData.name}
                        attendance={userData.attendance}
                        average={userData.average}
                    />
                ))}
            </StyledList>
        </>
    )
}

export default UsersList
