import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { Logo, StyledLink, Wrapper } from './Navigation.styles'

const Navigation = () => {
    // ANY TYPE!!!!
    const auth: any = useAuth()

    return (
        <Wrapper>
            <Logo>
                <h1>
                    Study
                    <br />
                    Buddy
                </h1>
            </Logo>
            <StyledLink to='/group'>Dashboard</StyledLink>
            <StyledLink to='/notes'>Notes</StyledLink>
            <StyledLink as='a' onClick={auth.signOut}>
                Logout
            </StyledLink>
        </Wrapper>
    )
}

export default Navigation
