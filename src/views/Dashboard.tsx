import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStudents } from '../hooks/useStudents'
import StudentsList from '../components/organisms/StudentsList/StudentsList'
import Title from '../components/atoms/Title/Title'
import { GroupWrapper, TitleWrapper, Wrapper } from '../views/Dashboard.styles'

const Dashboard = () => {
    const [groups, setGroups] = useState([])
    const { getGroups } = useStudents()
    const { id } = useParams()

    useEffect(() => {
        ;(async () => {
            const groups = await getGroups()
            setGroups(groups)
        })()
    }, [getGroups])

    if (!id && groups.length > 0) return <Navigate replace to={`/group/${groups[0]}`} />

    // ANY TYPE
    return (
        <Wrapper>
            <TitleWrapper>
                <Title as='h2'>Group {id}</Title>
                <nav>
                    {groups.map((group) => (
                        <Link key={group} to={`/group/${group}`}>
                            {group}{' '}
                        </Link>
                    ))}
                </nav>
            </TitleWrapper>
            <GroupWrapper>
                <StudentsList />
            </GroupWrapper>
        </Wrapper>
    )
}

export default Dashboard
