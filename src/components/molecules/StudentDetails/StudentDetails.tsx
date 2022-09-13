import React from 'react'
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styled'
import Title from '../../atoms/Title/Title'
import { IUsersList } from '../../../mocks/handlers/index'

interface IStudent {
    student?: IUsersList
}

const StudentDetails = ({ student }: IStudent) => {
    return (
        <div>
            <Title>{student?.name}</Title>
            <p>{student?.attendance}</p>
            <StyledAverage value={student?.average as number}>{student?.average}</StyledAverage>
        </div>
    )
}

export default StudentDetails
