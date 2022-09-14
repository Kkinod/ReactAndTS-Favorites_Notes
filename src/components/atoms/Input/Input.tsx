import styled from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'

export const Input = styled.input`
    padding: 10px 12px;
    border: 1px solid ${({ theme }: ITheme) => theme.colors.darkPurple};
    box-sizing: border-box;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 25px;
    font-size: ${({ theme }: ITheme) => theme.fontSize.l};
    resize: none;

    &:focus {
        outline: none;
        box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
    }
`
