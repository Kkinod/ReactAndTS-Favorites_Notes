import React from 'react'
import Title from '../../atoms/Title/Title'
import styled, { keyframes } from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
    background-color: white;
    padding: 25px 25px 15px;
    color: ${({ theme }: ITheme) => theme.colors.error};
    border: 3px solid ${({ theme }: ITheme) => theme.colors.error};
    border-radius: 15px;

    ${Title} {
        color: ${({ theme }: ITheme) => theme.colors.error};
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 15px;
        transform: translateX(-50%);
        background-color: ${({ theme }: ITheme) => theme.colors.error};
        width: 60px;
        height: 5px;
        border-radius: 50px;
    }

    $::before {
        opacity: 0.5;
    }

    &::after {
        transform: translateX(-50%) scaleX(0.2);
        transform-origin: left top;
        background-color: black;
    }
`

const ErrorMessage = () => {
    return (
        <Wrapper>
            <Title>Oops!</Title>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </Wrapper>
    )
}

export default ErrorMessage
