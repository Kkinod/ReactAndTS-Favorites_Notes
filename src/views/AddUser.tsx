import React, { useContext, useReducer } from 'react'
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

// need type reducer
// const reducer = (
//     state: { name: string; attendance: string; average: string },
//     action: { type: string; field?: string; value?: string },
// ) => {
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INPUT CHANGE':
            return {
                ...state,
                [action.field]: action.value,
            }
        case 'CLEAR VALUES':
            return initialFormState
        default:
            return state
    }
}

const AddUser = () => {
    const [formValues, dispatch] = useReducer(reducer, initialFormState)
    const { handleAddWorker } = useContext(UsersContext)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'INPUT CHANGE',
            field: e.target.name,
            value: e.target.value,
        })
    }

    const handleSubmitUser = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddWorker(formValues)
        dispatch({ type: 'CLEAR VALUES' })
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
