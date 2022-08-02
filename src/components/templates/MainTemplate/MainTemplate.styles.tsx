import { Theme } from '../../../assets/styles/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: scroll;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 150px 1fr;
    background-color: ${({ theme }: Theme) => theme.colors.lightGrey};
`
