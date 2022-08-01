import styled from 'styled-components'
import theme from '../../../assets/styles/theme'

interface Theme {
    theme: typeof theme
}

export const Button = styled.button`
    margin: 15px 0;
    padding: 7px 20px;
    font-size: ${({ theme }: Theme) => theme.fontSize.s};
    background-color: ${({ theme }: Theme) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
`

export default Button
