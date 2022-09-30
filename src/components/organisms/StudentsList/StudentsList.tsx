import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../atoms/Title/Title'
import StudentsListItem from '../../molecules/StudentsListItem/StudentsListItem'
import { useStudents } from '../../../hooks/useStudents'
import StyledList from './StudentsList.styled'

interface IUsersList {
    id: string
    name: string
    attendance: string
    average: string
}

interface IHandleOpenStudentDetails {
    handleOpenStudentDetails: (id: string) => void
}

const StudentsList = ({ handleOpenStudentDetails }: IHandleOpenStudentDetails) => {
    const [students, setStudents] = useState([])
    const { id } = useParams()
    const { getStudentsByGroup } = useStudents()

    useEffect(() => {
        ;(async () => {
            const students = await getStudentsByGroup(id as string)
            setStudents(students)
        })()
    }, [getStudentsByGroup, id])

    return (
        <>
            <Title>Worker list</Title>
            <StyledList>
                {students.map((userData: IUsersList) => (
                    <StudentsListItem
                        onClick={() => handleOpenStudentDetails(userData.id)}
                        key={userData.name}
                        userData={userData}
                    />
                ))}
            </StyledList>
        </>
    )
}

export default StudentsList
