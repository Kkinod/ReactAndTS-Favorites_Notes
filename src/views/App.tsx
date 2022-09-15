import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import Wrapper from './App.styles'
import FormField from '../components/molecules/FormField/FormField'
import Button from '../components/atoms/Button/Button'
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'

export interface IUsersList {
    id(id: any): void
    name: string
    attendance: string
    average: string
}

export interface IInputs {
    login: string
    password: string
}

interface IHandleSignIn {
    handleSignIn: any
    loginError: any
}

const AuthenticatedApp = () => {
    return (
        <MainTemplate>
            <Wrapper>
                <Routes>
                    <Route path='/' element={<Navigate replace to='/group/' />} />
                    <Route path='/group/:id' element={<Dashboard />} />
                </Routes>
            </Wrapper>
        </MainTemplate>
    )
}

const UnAuthenticatedApp = () => {
    // ANY TYPE!!!!
    const auth: any = useAuth()
    console.log(`AUTH: ${auth}`)

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
    // ANY TYPE!!!!
    const auth: any = useAuth()
    console.log(auth)

    return auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />
}

export default App
