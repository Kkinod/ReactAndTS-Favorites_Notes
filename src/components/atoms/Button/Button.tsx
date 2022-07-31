import React, { ReactNode } from 'react'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg'
import StyledButton from './Button.styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <StyledButton {...props}>
            <DeleteIcon />
        </StyledButton>
    )
}

export default Button
