import styled from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper'

export const Wrapper = styled.div`
    grid-row: 1 / 3;
    grid-column: 3 / 3;
    border-left: 1px solid ${({ theme }: ITheme) => theme.colors.darkPurple};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 50px;
    overflow-y: scroll;
`

export const NewsSectionHeader = styled.h2`
    margin-right: auto;
    color: ${({ theme }: ITheme) => theme.colors.darkGrey};
`

export const ArticleWrapper = styled(ViewWrapper)`
    margin: 30px 0;
    width: 100%;
    max-width: unset;
    border-radius: 12px;
    color: ${({ theme }: ITheme) => theme.colors.darkGrey};

    p {
        line-height: 1.6;
    }
`

export const TitleWrapper = styled.div`
    h3 {
        margin: 0;
        font-size: ${({ theme }: ITheme) => theme.fontSize.xl};
    }

    p {
        font-size: ${({ theme }: ITheme) => theme.fontSize.m};
    }
`

export const ContentWrapper = styled.div`
    display: flex;

    img {
        margin-left: 35px;
        max-width: 200px;
        object-fit: cover;
    }
`
