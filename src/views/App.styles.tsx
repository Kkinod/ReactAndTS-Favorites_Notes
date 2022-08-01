import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export default Wrapper
