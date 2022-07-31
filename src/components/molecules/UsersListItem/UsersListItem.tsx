import React from 'react'
import Button from '../../atoms/Button/Button'
import Wrapper, { StyledAverage, StyledInfo } from './UsersListItem.styled'

interface IUsersList {
    index: number
    deleteUser: (name: string) => void
    name: string
    attendance: string
    average: number
}

const UsersListItem = ({ index, deleteUser, name, attendance = '0%', average }: IUsersList) => {
    return (
        <Wrapper>
            <StyledAverage value={average}>{average}</StyledAverage>
            <StyledInfo>
                <p>
                    {name}
                    <Button onClick={deleteUser} />
                </p>
                <p>attendance: {attendance}</p>
            </StyledInfo>
        </Wrapper>
    )
}

export default UsersListItem
