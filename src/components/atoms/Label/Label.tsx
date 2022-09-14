import styled from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'

export const Label = styled.label`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }: ITheme) => theme.colors.darkGrey};
`
