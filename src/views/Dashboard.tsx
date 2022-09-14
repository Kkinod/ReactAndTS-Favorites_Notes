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
import axios from 'axios'

const mockStudent = {
    id: '1',
    name: 'Kamil Kamilczak',
    attendance: '39%',
    average: '2.3',
    group: 'A',
    course: 'Business Philosophy',
    grades: [
        {
            subject: 'Business Philosophy',
            average: '3.3',
        },
        {
            subject: 'Marketing',
            average: '4.7',
        },
        {
            subject: 'Modern Economy',
            average: '2.5',
        },
    ],
}

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

        axios.get('/fruits').then((res) => console.log(res))
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
                    <StudentDetails student={mockStudent}></StudentDetails>
                </Modal>
            </GroupWrapper>
        </Wrapper>
    )
}

export default Dashboard
