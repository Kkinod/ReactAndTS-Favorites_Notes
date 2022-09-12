import { render, screen, fireEvent, waitFor } from '../../../test-utils'
import { setupServer } from 'msw/node'
import { handlers } from '../../../mocks/handlers'
import { SearchBar } from './SearchBar'

const server = setupServer(...handlers)

describe('Search Bar', () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('Renders the component', () => {
        render(<SearchBar />)
        screen.getByText('Teacher')
        screen.getByPlaceholderText('Search')
    })

    // NAPRAWIC NAJPIERW SEARCHBARA!

    // it('Displays users when search phrase is matching', async () => {
    //     render(<SearchBar />)
    //     const input = screen.getByPlaceholderText('Search')

    //     fireEvent.change(input, { target: { value: 'Kamilczak' } })
    //     await screen.findByText(/Kamil Kamilczak/)
    // })

    it('Hides the results when input is empty', async () => {
        render(<SearchBar />)
        const input = screen.getByPlaceholderText('Search')
        // fireEvent.change(input, { target: { value: 'ad' } })
        // await screen.findByText(/Kamil Kamilczak/)

        fireEvent.change(input, { target: { value: '' } })
        await waitFor(() => {
            expect(screen.getByLabelText('results')).not.toBeVisible()
        })
    })
})
