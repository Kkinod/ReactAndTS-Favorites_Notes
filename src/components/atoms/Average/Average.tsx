import styled from 'styled-components'
import theme, { ITheme } from '../../../assets/styles/theme'

interface IThemeAndValue {
    theme: typeof theme
    value: string | number
}

export const Average = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }: ITheme) => theme.fontSize.s};
    color: ${({ theme }: ITheme) => theme.colors.white};
    font-weight: bold;
    background: ${({ theme, value }: IThemeAndValue) => {
        if (value > 4) return theme.colors.success
        if (value > 3) return theme.colors.warning
        if (value > 1) return theme.colors.error
        return theme.colors.grey
    }};
`
