import React from 'react'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg'
import StyledButton from './DeleteButton.styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
}

const DeleteButton = (props: ButtonProps) => {
    return (
        <StyledButton {...props}>
            <DeleteIcon />
        </StyledButton>
    )
}

export default DeleteButton
