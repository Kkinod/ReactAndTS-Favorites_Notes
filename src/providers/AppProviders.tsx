import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/globalStyle'
import theme from '../assets/styles/theme'
import { AuthProvider } from '../hooks/useAuth'
import { ErrorProvider } from '../hooks/useError'
import { Provider } from 'react-redux'
import { store } from '../store'

export interface IChildren {
    children: ReactNode
}

const AppProviders = ({ children }: IChildren) => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default AppProviders
