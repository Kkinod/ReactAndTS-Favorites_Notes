import styled from 'styled-components'
import { Theme } from '../../../../assets/styles/theme'
import ViewWrapper from '../../../molecules/ViewWrapper/ViewWrapper'

export const Wrapper = styled.div`
    grid-row: 1 / 3;
    grid-column: 3 / 3;
    border-left: 1px solid ${({ theme }: Theme) => theme.colors.darkPurple};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 50px;
`

export const NewsSectionHeader = styled.h2`
    margin-right: auto;
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
`

export const ArticleWrapper = styled(ViewWrapper)`
    margin: 30px 0;
    width: 100%;
    max-width: unset;
    border-radius: 12px;
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
`

export const TitleWrapper = styled.div`
    h3 {
        margin: 0;
        font-size: ${({ theme }: Theme) => theme.fontSize.xl};
    }

    p {
        font-size: ${({ theme }: Theme) => theme.fontSize.m};
    }
`
