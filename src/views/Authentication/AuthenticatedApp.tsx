import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate'
import Notes from '../Notes'
import { Wrapper } from '../Dashboard.styles'

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

export default AuthenticatedApp
