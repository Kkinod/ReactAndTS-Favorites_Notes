import styled from 'styled-components'
import { ITheme } from '../../../assets/styles/theme'

const ViewWrapper = styled.div`
    margin: 25px;
    background-color: ${({ theme }: ITheme) => theme.colors.white};
    width: 100%;
    max-width: 500px;
    padding: 40px 50px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`

export default ViewWrapper
