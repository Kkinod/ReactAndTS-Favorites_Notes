import styled from 'styled-components'
import { Theme } from '../Button/Button'

export const Label = styled.label`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
`
