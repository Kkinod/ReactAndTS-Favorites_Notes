import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import Wrapper from './App.styles'
import { GlobalStyle } from '../assets/styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/styles/theme'
import FormField from '../components/molecules/FormField/FormField'
import Button from '../components/atoms/Button/Button'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export interface IUsersList {
    id(id: any): void
    name: string
    attendance: string
    average: string
}

interface IInputs {
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

const UnAuthenticatedApp = ({ handleSignIn, loginError }: IHandleSignIn) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputs>()

    return (
        <form
            onSubmit={handleSubmit(handleSignIn)}
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
            {loginError && <span>{loginError}</span>}
        </form>
    )
}

const App = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            ;(async () => {
                try {
                    const response = await axios.get('me', {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    })
                    setUser(response.data)
                } catch (e) {
                    console.log(e)
                    //
                }
            })()
        }
    }, [])

    const handleSignIn = async ({ login, password }: IInputs) => {
        try {
            const response = await axios.post('/login', {
                login,
                password,
            })
            setUser(response.data)
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            setError('Please provide valid user data')
        }
    }

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {user ? (
                    <AuthenticatedApp />
                ) : (
                    <UnAuthenticatedApp loginError={error} handleSignIn={handleSignIn} />
                )}
            </ThemeProvider>
        </Router>
    )
}

export default App
