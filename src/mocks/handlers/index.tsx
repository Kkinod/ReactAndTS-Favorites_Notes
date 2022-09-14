import { students } from '../handlers/students'
import { groups } from '../handlers/groups'
import { auth } from './auth'

export const handlers = [...groups, ...students, ...auth]
