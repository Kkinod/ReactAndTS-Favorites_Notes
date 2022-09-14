import { setupWorker } from 'msw'
import { db } from './db'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

db.student.create({
    id: '1',
})
db.student.create({
    id: '2',
})
db.student.create({
    id: '3',
})
