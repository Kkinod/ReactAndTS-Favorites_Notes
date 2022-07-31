import styled from 'styled-components'
import theme from '../../../assets/styles/theme'

type Value = number
type Theme = typeof theme

interface ThemeAndValue {
    theme: Theme
    value: Value
}

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgrey;
    }
`

export const StyledAverage = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }: { theme: Theme }) => theme.fontSize.s};
    color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    font-weight: bold;
    background: ${({ theme, value }: ThemeAndValue) => {
        if (value > 4) return theme.colors.success
        if (value > 3) return theme.colors.warning
        if (value > 2) return theme.colors.error
        return theme.colors.grey
    }};
`

export const StyledInfo = styled.div`
    padding: 25px 20px;

    p {
        margin: 0;
        color: ${({ theme }: { theme: Theme }) => theme.colors.darkGrey};
    }

    p:first-child {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: ${({ theme }: { theme: Theme }) => theme.fontSize.l};
    }

    p:last-child {
        font-size: ${({ theme }: { theme: Theme }) => theme.fontSize.m};
    }
`

export default Wrapper
