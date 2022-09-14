import styled from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgrey;
    }
`

export const StyledInfo = styled.div`
    padding: 25px 20px;

    p {
        margin: 0;
        color: ${({ theme }: ITheme) => theme.colors.darkGrey};
    }

    p:first-child {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: ${({ theme }: ITheme) => theme.fontSize.l};
    }

    p:last-child {
        font-size: ${({ theme }: ITheme) => theme.fontSize.m};
    }
`

export default Wrapper
