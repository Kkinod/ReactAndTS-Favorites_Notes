import { rest } from 'msw'
import { students } from '../data/students'
import { groups } from '../data/groups'

export interface IUsersList {
    id: string
    name: string
    attendance: string
    average: string | number
    group: string
}

export const handlers = [
    rest.get('/groups', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ groups }))
    }),
    rest.get('/groups/:id', (req, res, ctx) => {
        if (req.params.id) {
            const matchingStudents = students.filter((student) => student.group === req.params.id)
            return res(
                ctx.status(200),
                ctx.json({
                    students: matchingStudents,
                }),
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                students,
            }),
        )
    }),
    rest.get('/students/:id', (req, res, ctx) => {
        if (req.params.id) {
            const matchingStudent = students.find((student) => student.id === req.params.id)
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
                students,
            }),
        )
    }),
    rest.post('/students/search', (req: any, res, ctx) => {
        const matchingStudents: IUsersList[] = req.body?.searchPhrase
            ? students.filter((student) =>
                  student.name.toLowerCase().includes(req.body?.searchPhrase.toLowerCase()),
              )
            : []
        return res(
            ctx.status(200),
            ctx.json({
                students: matchingStudents,
            }),
        )
    }),
]
