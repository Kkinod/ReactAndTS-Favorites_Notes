import { setupWorker } from 'msw'
import { db } from './db'
import { handlers } from '../mocks/handlers'

export const worker = setupWorker(...handlers)
console.log(`abc: ${worker}`)

const seed = () => {
    db.group.create({
        id: 'A',
    })
    db.group.create({
        id: 'B',
    })
    db.group.create({
        id: 'C',
    })

    db.teacher.create()

    for (let i = 0; i < 15; i++) {
        db.student.create()
        db.event.create()
    }
}

seed()

declare global {
    interface Window {
        mocks: any
    }
}

window.mocks = {
    seed,
    getStudents: () => db.student.getAll(),
    getEvents: () => db.event.getAll(),
    getGroups: () => db.group.getAll(),
}
