import React, { FormEvent, useState } from 'react'
import { users as usersData } from '../../../data/users'
import UsersListItem from '../../molecules/UsersListItem/UsersListItem'
import { StyledList, StyledTitle, Wrapper } from './UsersList.styled'
import FormField from '../../molecules/FormField/FormField'
import Button from '../../atoms/Button/Button'

interface IUsersList {
    name: string
    attendance: string
    average: string
}

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
}

const UsersList = () => {
    const [users, setUsers] = useState<IUsersList[]>(usersData)
    const [formValues, setFormValue] = useState<IUsersList>(initialFormState)

    const deleteWorker = (name: string) => {
        const filteredUser = users.filter((user) => user.name !== name)
        setUsers(filteredUser)
    }

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(formValues)
        setFormValue({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleAddWorker = (e: FormEvent<HTMLFormElement>) => {
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
        <>
            <Wrapper as='form' onSubmit={handleAddWorker}>
                <StyledTitle>Add new worker</StyledTitle>
                <FormField
                    label='Name'
                    id='name'
                    name='name'
                    value={formValues.name}
                    onChange={handleInputChange}
                />
                <FormField
                    label='Attendance'
                    id='attendance'
                    name='attendance'
                    value={formValues.attendance}
                    onChange={handleInputChange}
                />
                <FormField
                    label='Average'
                    id='average'
                    name='average'
                    value={formValues.average}
                    onChange={handleInputChange}
                />
                <Button type='submit'>Add</Button>
            </Wrapper>
            <Wrapper>
                <StyledTitle>Worker list</StyledTitle>
                <StyledList>
                    {users.map((userData, i) => (
                        <UsersListItem
                            index={i}
                            deleteUser={deleteWorker}
                            key={userData.name}
                            name={userData.name}
                            attendance={userData.attendance}
                            average={userData.average}
                        />
                    ))}
                </StyledList>
            </Wrapper>
        </>
    )
}

export default UsersList
