import { rest } from 'msw'
import { db } from '../db'
import { faker } from '@faker-js/faker'

interface IReqBody {
    title: string
    content: string
    id: string | number
}

export const notes = [
    rest.get('/notes', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ notes: db.note.getAll() }))
    }),
    rest.post('/notes', (req, res, ctx) => {
        if ((req.body as IReqBody).title && (req.body as IReqBody).content) {
            console.log('MSW:', req.body)
            const newNote = {
                id: faker.datatype.uuid(),
                title: (req.body as IReqBody).title,
                content: (req.body as IReqBody).content,
            }

            db.note.create(newNote)

            return res(
                ctx.status(200),
                ctx.json({
                    notes: newNote,
                }),
            )
        }

        return res(
            ctx.status(404),
            ctx.json({
                error: 'Every note need to contain title and content',
            }),
        )
    }),
    rest.delete('/notes', (req, res, ctx) => {
        if ((req.body as IReqBody).id) {
            const removedNote = db.note.delete({
                where: {
                    id: {
                        equals: (req.body as IReqBody).id,
                    },
                },
            })

            return res(
                ctx.status(200),
                ctx.json({
                    removedNote,
                }),
            )
        }

        return res(
            ctx.status(400),
            ctx.json({
                error: 'Please provide ID of removed note',
            }),
        )
    }),
]
