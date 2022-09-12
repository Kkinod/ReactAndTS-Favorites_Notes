import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/assets/styles/theme'
import { GlobalStyle } from '../src/assets/styles/globalStyle'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
// ANY TYPE!!!!
export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    ),
]
