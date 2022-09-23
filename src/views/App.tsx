import React from 'react'
import Button from '../components/atoms/Button/Button'
import Dashboard from './Dashboard'
import ErrorMessage from '../components/molecules/ErrorMessage/ErrorMessage'
import FormField from '../components/molecules/FormField/FormField'
import Notes from './Notes'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useError } from '../hooks/useError'
import { SubmitHandler, useForm } from 'react-hook-form'
import Wrapper from './App.styles'
import { String } from 'lodash'

export interface IUsersList {
    id(id: string): void
    name: string
    attendance: string
    average: string
}

export interface IInputs {
    login: string
    password: string
}

interface IError {
    error?: string
}

const AuthenticatedApp = () => {
    return (
        <MainTemplate>
            <Wrapper>
                <Routes>
                    <Route path='/' element={<Navigate replace to='/group/' />} />
                    <Route path='/group/:id' element={<Dashboard />} />
                    <Route path='/notes' element={<Notes />} />
                </Routes>
            </Wrapper>
        </MainTemplate>
    )
}

const UnAuthenticatedApp = () => {
    const auth = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputs>()

    return (
        <form
            onSubmit={handleSubmit(auth.signIn)}
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
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
        </form>
    )
}

const App = () => {
    const auth = useAuth()
    const { error }: IError = useError()

    return (
        <>
            {error ? <ErrorMessage /> : null}
            {auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </>
    )
}

export default App
