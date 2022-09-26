import ErrorMessage from '../components/molecules/ErrorMessage/ErrorMessage'
import { useAuth } from '../hooks/useAuth'
import { useError } from '../hooks/useError'
import AuthenticatedApp from './Authentication/AuthenticatedApp'
import UnAuthenticatedApp from './Authentication/UnAuthenticatedApp'

interface IError {
    error?: string
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
