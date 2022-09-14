import { rest } from 'msw'
import { db } from '../db'

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

export const students = [
    rest.get('/students/:id', (req, res, ctx) => {
        if (req.params.id) {
            const matchingStudent = db.student.findFirst({
                where: {
                    id: {
                        equals: req.params.id,
                    },
                },
            })
            if (!matchingStudent) {
                return res(
                    ctx.status(404),
                    ctx.json({
                        error: 'No matching student',
                    }),
                )
            }
            return res(
                ctx.status(200),
                ctx.json({
                    students: matchingStudent,
                }),
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                students: db.student.getAll(),
            }),
        )
    }),
    rest.post('/students/search', (req, res, ctx) => {
        const matchingStudents = db.student.findMany({
            where: {
                name: {
                    contains: req.body?.searchPhrase,
                },
            },
        })
        return res(
            ctx.status(200),
            ctx.json({
                students: matchingStudents,
            }),
        )
    }),
]
