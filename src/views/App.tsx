import React, { useState } from 'react'
import Wrapper from './App.styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { users as usersData } from '../data/users'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import AddUser from './AddUser'
import Dashboard from './Dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/globalStyle'
import theme from '../assets/styles/theme'

export interface IUsersList {
    name: string
    attendance: string
    average: string
}

export const WorkerContext = React.createContext({
    users: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleAddWorker: (formValues: IUsersList) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    deleteWorker: () => {},
})

const App = () => {
    const [users, setUsers] = useState<IUsersList[]>(usersData)

    const deleteWorker = (name: string) => {
        const filteredUser = users.filter((user) => user.name !== name)
        setUsers(filteredUser)
    }

    const handleAddWorker = (values: IUsersList) => {
        const newWorker = {
            name: values.name,
            attendance: values.attendance,
            average: values.average,
        }

        setUsers([newWorker, ...users])
    }

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <WorkerContext.Provider
                        value={{
                            users: [],
                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                            handleAddWorker: () => {},
                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                            deleteWorker: () => {},
                        }}
                    >
                        <Wrapper>
                            <Routes>
                                <Route path='/add-user' element={<AddUser />} />
                                <Route
                                    path='/'
                                    element={
                                        <Dashboard deleteWorker={deleteWorker} users={users} />
                                    }
                                />
                            </Routes>
                        </Wrapper>
                    </WorkerContext.Provider>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    )
}

export default App
