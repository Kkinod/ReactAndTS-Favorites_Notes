import React from 'react'
import UsersListItem from '../../molecules/UsersListItem/UsersListItem'
import { StyledList, StyledTitle, Wrapper } from './UsersList.styled'
import { IUsersList } from '../../../views/App'

interface IUsersListProps {
    users: IUsersList[]
    deleteWorker: (name: string) => void
}

const UsersList = ({ users, deleteWorker }: IUsersListProps) => {
    return (
        <>
            <Wrapper>
                <StyledTitle>Worker list</StyledTitle>
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
            </Wrapper>
        </>
    )
}

export default UsersList
