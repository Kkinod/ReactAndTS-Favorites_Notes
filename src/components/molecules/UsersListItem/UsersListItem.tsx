import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button/Button'
import Wrapper from './UsersListItem.styled'

interface IUsersList {
    name: string
    attendance: string
    average: string
}

const UsersListItem = ({ name, attendance, average }: IUsersList) => {
    return (
        <Wrapper key={name}>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>{attendance}</p>
            </div>
            <Button />
        </Wrapper>
    )
}

export default UsersListItem
