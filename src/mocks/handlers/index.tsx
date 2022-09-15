import { students } from '../handlers/students'
import { groups } from '../handlers/groups'
import { auth } from './auth'

export interface IUsersList {
    id: string
    name: string
    attendance: string
    average: string | number
    group: string
    course?: string
    grades?: {
        subject: string
        average: string
    }[]
}

export const handlers = [...groups, ...students, ...auth]
