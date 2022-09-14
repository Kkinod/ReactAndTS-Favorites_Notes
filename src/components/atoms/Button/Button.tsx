import styled from 'styled-components'
import { ITheme, IIsBig } from '../../../assets/styles/theme'

type TIsBigAndTheme = IIsBig & ITheme

export const Button = styled.button`
    margin: 15px 0;
    padding: ${({ isBig }: IIsBig) => (isBig ? '10px 38px' : '7px 20px')};
    font-size: ${({ isBig, theme }: TIsBigAndTheme) =>
        isBig ? theme.fontSize.m : theme.fontSize.s};
    background-color: ${({ theme }: ITheme) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({ theme }: ITheme) => theme.colors.darkGrey};
`

export default Button
