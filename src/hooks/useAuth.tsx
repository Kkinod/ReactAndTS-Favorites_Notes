import React, { ReactNode, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { IInputs } from '../views/App'
import { useError } from './useError'

interface IAuthProvider {
    children: ReactNode
}

const AuthContext = React.createContext({})

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState(null)
    // ANY TYPE
    const { dispatchError } = useError() as any

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
                }
            })()
        }
    }, [])

    const signIn = async ({ login, password }: IInputs) => {
        try {
            const response = await axios.post('/login', {
                login,
                password,
            })
            setUser(response.data)
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            dispatchError('Invalid email or password')
        }
    }

    const signOut = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const auth = useContext(AuthContext)

    if (!auth) {
        throw Error('useAuth need to be used inside AuthContext')
    }

    return auth
}
