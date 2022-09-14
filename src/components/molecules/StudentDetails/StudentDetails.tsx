import React from 'react'
import Title from '../../atoms/Title/Title'
import { IUsersList } from '../../../mocks/handlers/index'
import { Average } from '../../atoms/Average/Average'
import {
    BigAverage,
    StyledDetails,
    StyledInfo,
    StyledLabel,
    StyledSubjectInfo,
    Wrapper,
} from '../../molecules/StudentDetails/StudentDetails.styles'

interface IStudent {
    student: IUsersList
}

const StudentDetails = ({ student }: IStudent) => {
    return (
        <Wrapper>
            <BigAverage value={student?.average as number}>{student?.average}</BigAverage>
            {/* <Title isBig>{student.name}</Title> */}
            <Title>{student?.name}</Title>
            <StyledDetails>
                <StyledLabel>Course:</StyledLabel>
                <StyledInfo isBig={true}>{student?.course}</StyledInfo>
                <StyledLabel>Average grades:</StyledLabel>
                {student?.grades?.map(({ subject, average }) => (
                    <StyledSubjectInfo key={subject}>
                        <StyledInfo isBig={false}>{subject}</StyledInfo>
                        <Average value={average}>{average}</Average>
                    </StyledSubjectInfo>
                ))}
            </StyledDetails>
        </Wrapper>
    )
}

export default StudentDetails
