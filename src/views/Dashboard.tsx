import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStudents } from '../hooks/useStudents'
import StudentsList from '../components/organisms/StudentsList/StudentsList'
import Title from '../components/atoms/Title/Title'
import useModal from '../components/organisms/Modal/useModal'
import { GroupWrapper, TitleWrapper, Wrapper } from '../views/Dashboard.styles'
import { IUsersList } from '../mocks/handlers/index'
import StudentDetails from '../components/molecules/StudentDetails/StudentDetails'
import Modal from '../components/organisms/Modal/Modal'

const Dashboard = () => {
    const [groups, setGroups] = useState([])
    const [currentStudent, setCurrentStudent] = useState<IUsersList>()
    const { getGroups, getStudentById } = useStudents()
    const { id } = useParams()
    const { isOpen, handleOpenModal, handleCloseModal } = useModal()

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
                <Modal isOpen={isOpen} handleClose={handleCloseModal}>
                    <StudentDetails student={currentStudent as IUsersList}></StudentDetails>
                </Modal>
            </GroupWrapper>
        </Wrapper>
    )
}

export default Dashboard
