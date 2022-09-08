import styled from 'styled-components'
import theme, { Theme } from '../../../assets/styles/theme'
import { Input } from '../../atoms/Input/Input'
interface IThemeAndIsHighlighted {
    isHighlighted: boolean
    theme: typeof theme
}

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
export const SearchWrapper = styled.div`
    position: relative;
`

export const SearchResults = styled.ul`
    visibility: ${({ isVisible }: { isVisible: boolean }) => (isVisible ? 'visible' : 'hidden')};
    z-index: 1000;
    max-height: 500px;
    overflow-y: scroll;
    padding: 10px;
    border-radius: 15px;
    list-style: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }: Theme) => theme.colors.white};
`
export const SearchResultsItem = styled.li`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme, isHighlighted }: IThemeAndIsHighlighted) =>
        isHighlighted ? theme.colors.lightPurple : theme.colors.white};
    width: 100%;
    padding: 20px 5px;

    &:hover {
        background-color: ${({ theme }: Theme) => theme.colors.lightPurple};
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }: Theme) => theme.colors.darkPurple};
    }
`
