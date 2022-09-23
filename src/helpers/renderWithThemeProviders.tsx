import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import UsersProvider from '../providers/UsersProviders'
import theme from '../assets/styles/theme'
import { ThemeProvider } from 'styled-components'

export const renderWithProviders = (children: ReactNode) => {
    return render(
        <ThemeProvider theme={theme}>
            <UsersProvider>{children}</UsersProvider>
        </ThemeProvider>,
    )
}
