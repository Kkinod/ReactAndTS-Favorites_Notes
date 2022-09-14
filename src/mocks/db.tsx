import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

const fruits = ['Apple', 'Banana', 'Plum']

export const db = factory({
    student: {
        id: primaryKey(String),
        name: () => fruits[Math.floor(Math.random() * fruits.length)],
        price: () => Math.random() * 100,
    },
})
