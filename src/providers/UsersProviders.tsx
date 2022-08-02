import React, { useState } from 'react'
import { users as usersData } from '../data/users'

interface IChildren {
    children?: React.ReactNode
}

export interface IUsersList {
    name: string
    attendance: string
    average: string
}

interface Context {
    users: never[]
    handleAddUser: (p: IUsersList) => void
    deleteUser: () => void
}

export const UsersContext = React.createContext<Context>({
    users: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleAddUser: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    deleteUser: () => {},
})

const UsersProvider = ({ children }: IChildren) => {
    const [users, setUsers] = useState(usersData)

    const deleteUser = (name: string) => {
        const filteredUsers = users.filter((user) => user.name !== name)
        setUsers(filteredUsers)
    }

    const handleAddUser = (values: IUsersList) => {
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
                users: [],
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                handleAddUser: () => {},
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                deleteUser: () => {},
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider
