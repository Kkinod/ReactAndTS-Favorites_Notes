import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/globalStyle'
import theme from '../assets/styles/theme'
import { AuthProvider } from '../hooks/useAuth'

interface IChildren {
    children: ReactNode
}

const AppProviders = ({ children }: IChildren) => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <GlobalStyle />
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </Router>
    )
}

export default AppProviders
