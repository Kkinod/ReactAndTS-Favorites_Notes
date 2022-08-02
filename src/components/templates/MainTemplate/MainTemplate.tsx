import React from 'react'
import Navigation from '../../organisms/Navigation/Navigation'
import { Wrapper } from '../../templates/MainTemplate/MainTemplate.styles'

interface IChildren {
    children: React.ReactNode
}

const MainTemplate = ({ children }: IChildren) => {
    return (
        <Wrapper>
            <Navigation />
            {children}
        </Wrapper>
    )
}

export default MainTemplate
