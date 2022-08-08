import React, { useState } from 'react'
import { users as usersData } from '../data/users'

export interface IChildren {
    children?: React.ReactNode
}

export interface IUsersList {
    name: string
    attendance: string
    average: string
}

interface Context {
    users: IUsersList[]
    handleAddWorker: (p: IUsersList) => void
    deleteWorker: (p: string) => void
}

export const UsersContext = React.createContext<Context>({
    users: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleAddWorker: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    deleteWorker: () => {},
})

const UsersProvider = ({ children }: IChildren) => {
    const [users, setUsers] = useState(usersData)

    const deleteWorker = (name: string) => {
        const filteredUsers = users.filter((user) => user.name !== name)
        setUsers(filteredUsers)
    }

    const handleAddWorker = (values: IUsersList) => {
        const newUser = {
            name: values.name,
            attendance: values.attendance,
            average: values.average,
        }
        setUsers([newUser, ...users])
    }

    return (
        <UsersContext.Provider
            value={{
                users,
                handleAddWorker,
                deleteWorker,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider
