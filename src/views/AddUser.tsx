import React, { useContext } from 'react'
import FormField from '../components/molecules/FormField/FormField'
import { Button } from '../components/atoms/Button/Button'
import ViewWrapper from '../components/molecules/ViewWrapper/ViewWrapper'
import Title from '../components/atoms/Title/Title'
import { UsersContext } from '../providers/UsersProviders'
import { useForm } from '../hooks/useForm'

export const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
}

const AddUser = () => {
    const { handleAddWorker } = useContext(UsersContext)
    const {
        formValues,
        handleInputChange,
        handleClearForm,
        handleThrowError,
        handleToggleConsent,
    } = useForm(initialFormState)

    const handleSubmitUser = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formValues.consent) {
            handleAddWorker(formValues)
            handleClearForm(initialFormState)
        } else {
            handleThrowError('You need to gice consent')
        }
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
            <FormField
                label='Consent'
                id='consent'
                name='consent'
                type='checkbox'
                value={formValues.average}
                onChange={handleToggleConsent}
            />
            <Button type='submit'>Add</Button>
            {formValues.error ? <p>{formValues.error}</p> : null}
        </ViewWrapper>
    )
}

export default AddUser
