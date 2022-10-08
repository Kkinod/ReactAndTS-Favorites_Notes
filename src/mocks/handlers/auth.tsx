import { rest } from 'msw'
import { db } from '../db'
import { authenticateRequest } from '../helpers'

interface IReqBody {
    login: string
    password: string
}

const sanitizeUser = (user: any) => {
    const { password, ...rest } = user
    return rest
}

export const auth = [
    rest.post('/login', (req, res, ctx) => {
        const user = db.teacher.findFirst({
            where: {
                login: {
                    equals: (req.body as IReqBody).login,
                },
            },
        })
        if (user && user?.password === (req.body as IReqBody).password) {
            const token = btoa(user?.login as string)
            localStorage.setItem('__be_token__', token)
            return res(ctx.status(200), ctx.json({ ...sanitizeUser(user), token }))
        }
        return res(
            ctx.status(403),
            ctx.json({
                error: 'Invalid user data',
            }),
        )
    }),
    rest.get('/me', (req, res, ctx) => {
        if (authenticateRequest(req)) {
            const user = db.teacher.getAll()
            return res(ctx.status(200), ctx.json({ ...sanitizeUser(user) }))
        }
        return res(ctx.status(401))
    }),
]
