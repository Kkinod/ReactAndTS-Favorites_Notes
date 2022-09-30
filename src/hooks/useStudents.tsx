import { useCallback } from 'react'
import axios from 'axios'

const studentsAPI = axios.create({})

studentsAPI.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')

        if (token) {
            if (config.headers) {
                config.headers.authorization = `Bearer ${token}`
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

export const useStudents = () => {
    const getGroups = useCallback(async () => {
        try {
            const result = await studentsAPI.get('/groups')
            return result.data.groups
        } catch (e) {
            console.log(e)
        }
    }, [])

    const getStudentById = useCallback(async (studentId: string) => {
        try {
            const result = await studentsAPI.get(`/students/${studentId}`)
            return result.data.students
        } catch (e) {
            console.log(e)
        }
    }, [])

    const getStudentsByGroup = useCallback(async (groupId: string) => {
        try {
            const result = await studentsAPI.get(`/groups/${groupId}`)
            return result.data.students
        } catch (e) {
            console.log(e)
        }
    }, [])

    const findStudents = async (searchPhrase: string) => {
        try {
            const { data } = await studentsAPI.post('/students/search', {
                searchPhrase,
            })
            return data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getGroups,
        getStudentsByGroup,
        findStudents,
        getStudentById,
    }
}
