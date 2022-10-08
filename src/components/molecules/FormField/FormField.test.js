import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import FormField from './FormField'
import { renderWithProviders } from '../../../helpers/renderWithThemeProviders'

describe('Form Field', () => {
    it('Renders the component', () => {
        renderWithProviders(<FormField label='name' name='name' id='id' />)
    })
})

const InputWithButton = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => setInputValue(e.target.value)

    return (
        <>
            <input
                name='Name'
                id='name'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Enter your name'
            />
            <button disabled={!inputValue}>Submit</button>
        </>
    )
}

describe('Input With Button', () => {
    it('Renders the component', () => {
        render(<InputWithButton />)
        screen.getByText('Submit')
    })

    it('Properly handles value change', () => {
        render(<InputWithButton />)
        const input = screen.getByPlaceholderText('Enter your name')
        fireEvent.change(input, { target: { value: 'Kamil' } })
        expect(input).toHaveValue('Kamil')
    })

    it('Checking if the button is disabled/enabled when the input is empty/have value', () => {
        render(<InputWithButton />)
        const button = screen.getByText('Submit')
        expect(button).toBeDisabled()

        const input = screen.getByPlaceholderText('Enter your name')
        fireEvent.change(input, { target: { value: 'Kamil' } })
        expect(button).not.toBeDisabled()
    })
})
