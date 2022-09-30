import { RestRequest, PathParams } from 'msw'

export const authenticateRequest = (req: RestRequest<never, PathParams<string>>) => {
    const token = localStorage.getItem('__be_token__') || null
    const userToken = req.headers.get('Authorization')?.replace('Bearer ', '')

    return token === userToken
}
