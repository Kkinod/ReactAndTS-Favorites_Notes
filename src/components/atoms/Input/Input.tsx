import styled from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'

interface IIsTextArea {
    isTextarea: boolean
}

// border-radius: ${({ isTextarea }: IIsTextArea) => (isTextarea ? '15px' : '25px')};

export const Input = styled.input`
    padding: 10px 12px;
    border: 1px solid ${({ theme }: ITheme) => theme.colors.darkPurple};
    box-sizing: border-box;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    font-size: ${({ theme }: ITheme) => theme.fontSize.l};
    border-radius: 25px;
    resize: none;
    &:focus {
        outline: none;
        box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
    }
`
