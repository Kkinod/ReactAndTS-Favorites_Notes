import React from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../atoms/Title/Title'
import UsersListItem from '../../molecules/StudentsListItem/StudentsListItem'
import { useStudents } from '../../../hooks/useStudents'
import { IUsersList } from '../../../views/App'
import StyledList from './StudentsList.styled'

interface IUsersListProps {
    users?: IUsersList[]
    deleteWorker?: (name: string) => void
}

const UsersList = ({ users = [], deleteWorker }: IUsersListProps) => {
    const { id } = useParams()
    const { students } = useStudents({ groupId: id })

    return (
        <>
            <Title>Worker list</Title>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItem
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
