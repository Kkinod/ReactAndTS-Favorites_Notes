import { render, screen, fireEvent, waitFor } from '../test-utils'
import App from './App'

describe('App component', () => {
    it('Renders the root component as unauthenticated user', () => {
        render(<App />)
        screen.getByLabelText('login')
    })

    it('Displays error message when wrong credentials are passed', async () => {
        render(<App />)
        const login = screen.getByLabelText('login')
        const password = screen.getByLabelText('password')

        fireEvent.change(login, { target: { value: 'Eve' } })
        fireEvent.change(password, { target: { value: 'Eve' } })

        fireEvent.click(screen.getByText('Sign in'))

        await waitFor(() => screen.getByText(/Oops!/))
    })

    it('Displays authenticated application', async () => {
        render(<App />)
        const login = screen.getByLabelText('login')
        const password = screen.getByLabelText('password')

        fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } })
        fireEvent.change(password, { target: { value: 'Test123' } })

        fireEvent.click(screen.getByText('Sign in'))

        await waitFor(() => screen.getByText('Teacher'))
    })
})
