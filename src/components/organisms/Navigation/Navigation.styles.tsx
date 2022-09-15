import { ITheme } from '../../../assets/styles/theme'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const className = 'active'

export const Wrapper = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${({ theme }: ITheme) => theme.colors.darkPurple};
    justify-content: flex-start;
    padding: 30px 0;
    grid-row: 1 / 3;
    grid-column: 1 / 1;
`

export const Logo = styled.div`
    background-color: ${({ theme }: ITheme) => theme.colors.darkGrey};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
    h1 {
        font-size: 15px;
        color: ${({ theme }: ITheme) => theme.colors.white};
        text-align: right;
        margin: 15px 20px 15px auto;
        position: relative;
    }
`

export const StyledLink = styled(NavLink).attrs({
    className: (navData) => (navData.isActive ? 'active' : ''),
})`
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }: ITheme) => theme.colors.darkGrey};
    text-align: right;
    margin: 15px 20px 15px auto;
    position: relative;

    &.${className} {
        &::after {
            opacity: 1;
        }
    }

    &::after {
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        content: '';
        position: absolute;
        width: 18px;
        height: 3px;
        top: 50%;
        transform: translateY(-50%);
        right: -20px;
        background-color: ${({ theme }: ITheme) => theme.colors.darkPurple};
    }
`
