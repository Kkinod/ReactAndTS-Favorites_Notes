import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/globalStyle'
import theme from '../assets/styles/theme'
import { AuthProvider } from '../hooks/useAuth'
import { ErrorProvider } from '../hooks/useError'

interface IChildren {
    children: ReactNode
}

const AppProviders = ({ children }: IChildren) => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ErrorProvider>
                    <AuthProvider>
                        <GlobalStyle />
                        {children}
                    </AuthProvider>
                </ErrorProvider>
            </ThemeProvider>
        </Router>
    )
}

export default AppProviders
