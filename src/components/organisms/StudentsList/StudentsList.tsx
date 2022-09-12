import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../atoms/Title/Title'
import StudentsListItem from '../../molecules/StudentsListItem/StudentsListItem'
import { useStudents } from '../../../hooks/useStudents'
import StyledList from './StudentsList.styled'
import { IUsersList } from '../../../views/App'

interface IUsersListProps {
    users: IUsersList[]
    deleteWorker?: (name: string) => void
}

// const UsersList = ({ users = [], deleteWorker }: IUsersListProps) => {
const StudentsList = () => {
    const [students, setStudents] = useState([])
    const { id } = useParams()
    const { getStudents } = useStudents()

    useEffect(() => {
        ;(async () => {
            const students = await getStudents(id)
            setStudents(students)
        })()
    }, [getStudents, id])

    return (
        <>
            <Title>Worker list</Title>
            <StyledList>
                {students.map((userData: IUsersList) => (
                    <StudentsListItem key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    )
}

export default StudentsList