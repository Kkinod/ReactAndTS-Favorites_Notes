import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { IUsersList } from '../mocks/handlers/index'
import { useGetGroupsQuery } from '../store'
import { useStudents } from '../hooks/useStudents'
import StudentDetails from '../components/molecules/StudentDetails/StudentDetails'
import StudentsList from '../components/organisms/StudentsList/StudentsList'
import Modal from '../components/organisms/Modal/Modal'
import Title from '../components/atoms/Title/Title'
import useModal from '../components/organisms/Modal/useModal'
import { GroupWrapper, TitleWrapper, Wrapper } from '../views/Dashboard.styles'

const Dashboard = () => {
    const [currentStudent, setCurrentStudent] = useState<IUsersList>()
    const { getStudentById } = useStudents()
    const { id } = useParams()
    const { isOpen, handleOpenModal, handleCloseModal } = useModal()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { data, isLoading } = useGetGroupsQuery()

    const handleOpenStudentDetails = async (id: string) => {
        const student = await getStudentById(id)
        setCurrentStudent(student)
        handleOpenModal()
    }

    if (isLoading) {
        return (
            <Wrapper>
                <TitleWrapper>Loading...</TitleWrapper>
            </Wrapper>
        )
    }

    if (!id && data.groups.length > 0) return <Navigate replace to={`/group/${data.groups[0]}`} />

    return (
        <Wrapper>
            <TitleWrapper>
                <Title as='h2'>Group {id}</Title>
                <nav>
                    {data.groups.map(({ id }: { id: string }) => (
                        <Link key={id} to={`/group/${id}`}>
                            {id}{' '}
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
