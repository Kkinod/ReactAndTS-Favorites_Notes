import React from 'react'
import { StyledTitle, Wrapper } from '../UsersList/UsersList.styled'
import FormField from '../../molecules/FormField/FormField'
import Button from '../../atoms/Button/Button'

interface IUsersList {
    name: string
    attendance: string
    average: string
}

interface abc {
    handleAddWorker: React.FormEventHandler<HTMLFormElement>
    formValues: IUsersList
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>
}

const Form = ({ handleAddWorker, formValues, handleInputChange }: abc) => {
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
        </>
    )
}

export default Form
