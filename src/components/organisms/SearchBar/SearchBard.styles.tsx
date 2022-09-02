import styled from 'styled-components'
import { Theme } from '../../../assets/styles/theme'
import { Input } from '../../atoms/Input/Input'

export const SearchBarWrapper = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    border-bottom: 1px solid ${({ theme }: Theme) => theme.colors.darkPurple};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40x;

    ${Input} {
        font-size: ${({ theme }: Theme) => theme.fontSize.xl};
        width: 100%;
        max-width: 350px;
        border: 2px solid ${({ theme }: Theme) => theme.colors.lightPurple};
    }
`

export const StatusInfo = styled.div`
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
    font-size: ${({ theme }: Theme) => theme.fontSize.l};
    margin-right: 40px;

    p {
        margin: 5px;
    }
`
