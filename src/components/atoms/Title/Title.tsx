import styled from 'styled-components'
import { Theme } from '../Button/Button'

const Title = styled.h1`
    font-size: ${({ theme }: Theme) => theme.fontSize.xl};
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
`

export default Title
