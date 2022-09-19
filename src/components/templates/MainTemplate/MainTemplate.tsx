import React from 'react'
import Navigation from '../../organisms/Navigation/Navigation'
import NotesWidget from '../../organisms/NotesWidget/NotesWidget'
import { SearchBar } from '../../organisms/SearchBar/SearchBar'
import { Wrapper } from '../../templates/MainTemplate/MainTemplate.styles'
import NewsSection from '../NewsSection/NewsSection'

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
            <NotesWidget />
        </Wrapper>
    )
}

export default MainTemplate
