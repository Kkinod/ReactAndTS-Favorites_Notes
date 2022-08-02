import { Theme } from '../../../assets/styles/theme'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${({ theme }: Theme) => theme.colors.darkPurple};
    justify-content: flex-start;
    padding: 30px 0;
`

export const Logo = styled.div`
    background-color: ${({ theme }: Theme) => theme.colors.darkGrey};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
    h1 {
        font-size: 15px;
        color: ${({ theme }: Theme) => theme.colors.white};
        text-align: right;
        margin: 15px 20px 15px auto;
        position: relative;
    }
`

const className = 'active'
export const StyledLink = styled(NavLink).attrs({
    className: (navData) => (navData.isActive ? 'active' : ''),
})`
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }: Theme) => theme.colors.darkGrey};
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
        background-color: ${({ theme }: Theme) => theme.colors.darkPurple};
    }
`
