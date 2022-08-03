import React, { useContext } from 'react'
import DeleteButton from '../../atoms/DeleteButton/DeleteButton'
import Wrapper, { StyledAverage, StyledInfo } from './UsersListItem.styled'
import { UsersContext } from '../../../providers/UsersProviders'

interface IUsersList {
    deleteWorker?: (name: string) => void
    name: string
    attendance: string
    average: string
}

const UsersListItem = ({ name, attendance = '0%', average }: IUsersList) => {
    const { deleteWorker } = useContext(UsersContext)

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
