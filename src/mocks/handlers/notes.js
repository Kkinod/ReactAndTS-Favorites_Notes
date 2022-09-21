import { rest } from 'msw'
import { db } from '../db'
import { faker, Faker } from '@faker-js/faker'

export const notes = [
    rest.get('/notes', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ notes: db.note.getAll() }))
    }),
    rest.post('/notes', (req, res, ctx) => {
        const newNote = {
            id: faker.datatype.uuid(),
            title: req.body.title,
            content: req.body.content,
        }

        db.note.create(newNote);

        if (req?.body?.title && req.body.content) {
            return res(
                ctx.status(201),
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
]
