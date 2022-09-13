import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStudents } from '../hooks/useStudents'
import StudentsList from '../components/organisms/StudentsList/StudentsList'
import Title from '../components/atoms/Title/Title'
import useModal from '../components/organisms/Modal/useModal'
import { GroupWrapper, TitleWrapper, Wrapper } from '../views/Dashboard.styles'
import { IUsersList } from '../mocks/handlers/index'
import { StyledAverage } from '../components/molecules/StudentsListItem/StudentsListItem.styled'

const Dashboard = () => {
    const [groups, setGroups] = useState([])
    const [currentStudent, setCurrentStudent] = useState<IUsersList>()
    const { getGroups, getStudentById } = useStudents()
    const { id } = useParams()
    const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()

    useEffect(() => {
        ;(async () => {
            const groups = await getGroups()
            setGroups(groups)
        })()
    }, [getGroups])

    const handleOpenStudentDetails = async (id: any) => {
        const student = await getStudentById(id)
        setCurrentStudent(student)
        handleOpenModal()
    }

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
                <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
                {isOpen ? (
                    <Modal handleClose={handleCloseModal}>
                        <Title>{currentStudent?.name}</Title>
                        <p>{currentStudent?.attendance}</p>
                        <StyledAverage value={currentStudent?.average as number}>
                            {currentStudent?.average}
                        </StyledAverage>
                    </Modal>
                ) : null}
            </GroupWrapper>
        </Wrapper>
    )
}

export default Dashboard
