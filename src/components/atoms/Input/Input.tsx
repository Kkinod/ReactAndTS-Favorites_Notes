import styled from 'styled-components'
import { Theme } from '../Button/Button'

export const Input = styled.input`
    padding: 10px 12px;
    border: 1px solid ${({ theme }: Theme) => theme.colors.darkPurple};
    box-sizing: border-box;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 25px;
    font-size: ${({ theme }: Theme) => theme.fontSize.l};
    resize: none;

    &:focus {
        outline: none;
        box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
    }
`
