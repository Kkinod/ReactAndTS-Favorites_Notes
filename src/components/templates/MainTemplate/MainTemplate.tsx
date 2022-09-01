import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../../assets/styles/theme'
import Navigation from '../../organisms/Navigation/Navigation'
import { SearchBar } from '../../organisms/SearchBar/SearchBar'
import { Wrapper } from '../../templates/MainTemplate/MainTemplate.styles'
import NewsSection from './NewsSection/NewsSection'

interface IChildren {
    children: React.ReactNode
}

const MainTemplate = ({ children }: IChildren) => {
    return (
        <Wrapper>
            <Navigation />
            <SearchBar />
            {children}
            <NewsSection />
        </Wrapper>
    )
}

export default MainTemplate
