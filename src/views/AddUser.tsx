import React, { useContext, useState } from 'react'
import FormField from '../components/molecules/FormField/FormField'
import { Button } from '../components/atoms/Button/Button'
import ViewWrapper from '../components/molecules/ViewWrapper/ViewWrapper'
import Title from '../components/atoms/Title/Title'
import { UsersContext } from '../providers/UsersProviders'

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
}

const AddUser = () => {
    const [formValues, setFormValues] = useState(initialFormState)
    const { handleAddWorker } = useContext(UsersContext)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmitUser = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddWorker(formValues)
        setFormValues(initialFormState)
    }

    return (
        <ViewWrapper as='form' onSubmit={handleSubmitUser}>
            <Title>Add new student</Title>
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
        </ViewWrapper>
    )
}

export default AddUser
