import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import Button from '../../components/atoms/Button/Button'
import FormField from '../../components/molecules/FormField/FormField'
import FormWrapper from './UnAuthenticatedApp.styles'

export interface IInputs {
    login: string
    password: string
}

const UnAuthenticatedApp = () => {
    const auth = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputs>()

    return (
        <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
            <FormField label='login' id='login' {...register('login', { required: true })} />
            {errors.login && <span>Login is required</span>}
            <FormField
                label='password'
                id='password'
                type='password'
                {...register('password', { required: true })}
            />
            {errors.password && <span>Password is required</span>}
            <Button type='submit'>Sign in</Button>
        </FormWrapper>
    )
}

export default UnAuthenticatedApp
