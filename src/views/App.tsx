import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import AddUser from './AddUser'
import Dashboard from './Dashboard'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import Wrapper from './App.styles'
import { GlobalStyle } from '../assets/styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/styles/theme'

export interface IUsersList {
    name: string
    attendance: string
    average: string
}

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <Wrapper>
                        <Routes>
                            <Route path='/add-user' element={<AddUser />} />
                            <Route path='/group/:id' element={<Dashboard />} />
                            <Route path='*' element={<Navigate replace to='/group' />} />
                        </Routes>
                    </Wrapper>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    )
}

export default App
