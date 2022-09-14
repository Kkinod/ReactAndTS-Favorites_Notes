import { ITheme } from '../../../assets/styles/theme'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 25px;
    height: 25px;
    background-color: ${({ theme }: ITheme) => theme.colors.grey};
    border-radius: 50px;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }
`

export default StyledButton
