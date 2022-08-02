import React, { useContext } from 'react'
import ViewWrapper from '../components/molecules/ViewWrapper/ViewWrapper'
import UsersList from '../components/organisms/UsersList/UsersList'
import { IUsersList } from '../views/App'

interface IDashboardProps {
    users: IUsersList[]
    deleteWorker: (name: string) => void
}

const Dashboard = ({ users, deleteWorker }: IDashboardProps) => {
    return (
        <ViewWrapper>
            <UsersList users={users} deleteWorker={deleteWorker} />
        </ViewWrapper>
    )
}

export default Dashboard
