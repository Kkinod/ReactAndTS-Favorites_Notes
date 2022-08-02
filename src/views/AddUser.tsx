import React from 'react'
import FormField from '../components/molecules/FormField/FormField'
import Button from '../components/atoms/Button/Button'
import ViewWrapper from '../components/molecules/ViewWrapper/ViewWrapper'
import Title from '../components/atoms/Title/Title'
import { IUsersList } from '../views/App'

interface IFormProps {
    handleAddWorker: React.FormEventHandler<HTMLFormElement>
    formValues: IUsersList
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>
}

const Form = ({ handleAddWorker, formValues, handleInputChange }: IFormProps) => {
    return (
        <ViewWrapper as='form' onSubmit={handleAddWorker}>
            <Title>Add new worker</Title>
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

export default Form
