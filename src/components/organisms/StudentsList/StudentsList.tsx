import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../atoms/Title/Title'
import StudentsListItem from '../../molecules/StudentsListItem/StudentsListItem'
import { useStudents } from '../../../hooks/useStudents'
import { IUsersList } from '../../../views/App'
import StyledList from './StudentsList.styled'

interface IUsersListProps {
    users?: IUsersList[]
    deleteWorker?: (name: string) => void
}

// const UsersList = ({ users = [], deleteWorker }: IUsersListProps) => {
const UsersList = () => {
    const [students, setStudents] = useState([])
    const { id } = useParams()
    const { getStudents } = useStudents()

    useEffect(() => {
        ;(async () => {
            const groups = await getStudents(id)
            setStudents(students)
        })()
    }, [getStudents, id])

    // ANY TYPE
    return (
        <>
            <Title>Worker list</Title>
            <StyledList>
                {students.map((userData: IUsersList) => (
                    // <StudentsListItem
                    //     deleteWorker={userData.deleteWorker}
                    //     key={userData.name}
                    //     name={userData.name}
                    //     attendance={userData.attendance}
                    //     average={userData.average}
                    // />
                    <StudentsListItem key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    )
}

export default UsersList
