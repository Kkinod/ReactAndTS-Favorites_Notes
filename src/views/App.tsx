import React, { useState } from 'react'
import UsersList from '../components/organisms/UsersList/UsersList'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/globalStyle'
import theme from '../assets/styles/theme'
import Wrapper from './App.styles'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { users as usersData } from '../data/users'
import Form from '../components/organisms/Form/Form'

export interface IUsersList {
    name: string
    attendance: string
    average: string
}

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
}

const App = () => {
    const [users, setUsers] = useState<IUsersList[]>(usersData)
    const [formValues, setFormValue] = useState<IUsersList>(initialFormState)

    const deleteWorker = (name: string) => {
        const filteredUser = users.filter((user) => user.name !== name)
        setUsers(filteredUser)
    }

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormValue({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleAddWorker: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const newWorker = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        }

        setUsers([newWorker, ...users])
        setFormValue(initialFormState)
    }

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Wrapper>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/add-user'>Add user</Link>
                    </nav>
                    <Routes>
                        <Route
                            path='/'
                            element={<UsersList deleteWorker={deleteWorker} users={users} />}
                        />
                        <Route
                            path='/add-user'
                            element={
                                <Form
                                    formValues={formValues}
                                    handleAddWorker={handleAddWorker}
                                    handleInputChange={handleInputChange}
                                />
                            }
                        />
                    </Routes>
                </Wrapper>
            </ThemeProvider>
        </Router>
    )
}

export default App
