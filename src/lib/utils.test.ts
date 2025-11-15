import { test } from 'purple-tape'
import { greetUser, type User } from './utils.ts'

test('greetUser returns correct greeting', async (t) => {
    const user: User = {
        name: 'Alice',
        favoriteColor: 'red',
    }

    const result = greetUser(user)
    t.equal(result, 'Hello, Alice! Your favorite color is red.')
})

test('greetUser handles different colors', async (t) => {
    const user: User = {
        name: 'Bob',
        favoriteColor: 'green',
    }

    const result = greetUser(user)
    t.equal(result, 'Hello, Bob! Your favorite color is green.')
})
