import React, { useState, useEffect } from 'react'
import axios from 'axios'
export interface IChildren {
    children?: React.ReactNode
}

export interface IUsersList {
    id?: string
    name: string
    attendance: string
    average: string
    group?: string
}

interface IContext {
    users: IUsersList[]
    handleAddWorker: (p: IUsersList) => void
    deleteWorker: (p: string) => void
}

export const UsersContext = React.createContext<IContext>({
    users: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleAddWorker: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    deleteWorker: () => {},
})

const UsersProvider = ({ children }: IChildren) => {
    const [users, setUsers] = useState<IUsersList[]>([])

    useEffect(() => {
        axios
            .get('/students')
            .then(({ data }) => setUsers(data.students))
            .catch((err) => console.log(err))
    }, [])

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
