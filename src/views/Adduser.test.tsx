import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../helpers/renderWithThemeProviders'
import AddUser from './AddUser'
import Dashboard from './Dashboard'
import '@testing-library/jest-dom/extend-expect'

describe('Form field', () => {
    it('Renders the component', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>,
        )
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } })
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '75%' } })
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } })
        fireEvent.click(screen.getByText('Add'))
        screen.getByText('Grażyna')
    })
})
