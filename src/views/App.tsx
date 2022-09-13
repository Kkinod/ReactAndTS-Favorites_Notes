import React, { useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import Wrapper from './App.styles'
import { GlobalStyle } from '../assets/styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/styles/theme'
import Modal from '../components/organisms/Modal/Modal'
import Button from '../components/atoms/Button/Button'

export interface IUsersList {
    name: string
    attendance: string
    average: string
}

const App = () => {
    const [isModalOpen, setModalState] = useState(false)

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    {isModalOpen ? <Modal handleClose={() => setModalState(false)} /> : null}
                    <Wrapper>
                        <Button onClick={() => setModalState(true)}>Open Modal</Button>
                        <Routes>
                            <Route path='/' element={<Navigate replace to='/group' />} />
                            <Route path='/group/:id' element={<Dashboard />} />
                        </Routes>
                    </Wrapper>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    )
}

export default App
