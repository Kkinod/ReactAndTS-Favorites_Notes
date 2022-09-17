import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import AppProviders from './providers/AppProviders'

interface IChildren {
    children: ReactNode
}

const AllTheProviders = ({ children }: IChildren) => {
    return <AppProviders>{children}</AppProviders>
}

const customRender = (ui: any, options?: any) =>
    render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
