import React, { ReactNode, useCallback, useContext, useState } from 'react'

interface IErrorChildren {
    children: ReactNode
}

const ErrorContext = React.createContext({})

export const ErrorProvider = ({ children }: IErrorChildren) => {
    const [error, setError] = useState<string | null>(null)

    const dispatchError = useCallback((message: string) => {
        setError(message)
        setTimeout(() => {
            setError('')
        }, 7000)
    }, [])

    return (
        <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>
    )
}

export const useError = () => {
    const errorContext = useContext(ErrorContext)

    if (!errorContext) {
        throw Error('useAuth needs to be used inside AuthContext')
    }

    return errorContext
}
