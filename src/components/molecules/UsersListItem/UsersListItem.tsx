import React from 'react'
import DeleteButton from '../../atoms/DeleteButton/DeleteButton'
import Wrapper, { StyledAverage, StyledInfo } from './UsersListItem.styled'

interface IUsersList {
    index: number
    deleteWorker: (name: string) => void
    name: string
    attendance: string
    average: string
}

const UsersListItem = ({ deleteWorker, name, attendance = '0%', average }: IUsersList) => {
    return (
        <Wrapper>
            <StyledAverage value={average}>{average}</StyledAverage>
            <StyledInfo>
                <p>
                    {name}
                    <DeleteButton onClick={() => deleteWorker(name)} />
                </p>
                <p>attendance: {attendance}</p>
            </StyledInfo>
        </Wrapper>
    )
}

export default UsersListItem
