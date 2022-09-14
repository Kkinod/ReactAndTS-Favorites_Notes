import styled from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'

const Title = styled.h1`
    font-size: ${({ theme }: ITheme) => theme.fontSize.xl};
    color: ${({ theme }: ITheme) => theme.colors.darkGrey};
`

export default Title
