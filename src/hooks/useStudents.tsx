import { useCallback } from 'react'
import axios from 'axios'

export const useStudents = () => {
    const getGroups = useCallback(async () => {
        try {
            const result = await axios.get('/groups')
            return result.data.groups
        } catch (e) {
            console.log(e)
        }
    }, [])
    // ANY TYPE
    const getStudentsByGroup = useCallback(async (groupId: any) => {
        try {
            const result = await axios.get(`/groups/${groupId}`)
            return result.data.students
        } catch (e) {
            console.log(e)
        }
    }, [])
    // ANY TYPE
    const findStudents = async (searchPhrase: string) => {
        try {
            const { data } = await axios.post('/students/search', {
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
    }
}
