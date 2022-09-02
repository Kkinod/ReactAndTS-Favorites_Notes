import styled from 'styled-components'
import theme from '../../../assets/styles/theme'

export interface Theme {
    theme: typeof theme
}

interface IIsBig {
    isBig?: boolean
}

type TIsBigAndTheme = IIsBig & Theme

export const Button = styled.button`
    margin: 15px 0;
    padding: ${({ isBig }: IIsBig) => (isBig ? '10px 38px' : '7px 20px')};
    font-size: ${({ isBig, theme }: TIsBigAndTheme) =>
        isBig ? theme.fontSize.m : theme.fontSize.s};
    background-color: ${({ theme }: Theme) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
`

export default Button
