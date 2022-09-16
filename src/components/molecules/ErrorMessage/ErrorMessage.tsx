import React from 'react'
import Title from '../../atoms/Title/Title'
import { Wrapper } from './ErrorMessage.styles'

interface IErrorMsg {
    message?: string
}

const defaultErrorMessage = 'Something wrong. Please try again, or contact our support.'

const ErrorMessage = ({ message = defaultErrorMessage }: IErrorMsg) => {
    return (
        <Wrapper>
            <Title>Oops!</Title>
            <p>{message}</p>
        </Wrapper>
    )
}

export default ErrorMessage
