// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'

describe('users service', () => {
  it('registered the service', () => {
    const service = app.service('users')

    assert.ok(service, 'Registered the service')
  })

  it('finds all users', async () => {
    const users = await app.service('users').find({
      paginate: false
    })

    assert.ok(Array.isArray(users))
  })

  it('creates a new user', async () => {
    const user = await app.service('users').create({
      username: 'newuser',
      password: 'secret'
    })

    const [latestUser] = await app.service('users').find({
      query: { $sort: { _id: -1 }, $limit: 1 },
      paginate: false
    })

    assert.deepStrictEqual(user._id, latestUser._id)

    await app.service('users').remove(user._id.toString())
  })

  it('deletes an existing user', async () => {
    const user = await app.service('users').create({
      username: 'deleteme',
      password: 'secret'
    })

    const beforeResult = await app.service('users').find({
      paginate: false,
      pipeline: [{ $group: { _id: null, count: { $count: {} } } }]
    })
    const beforeCount = (beforeResult[0] as any).count

    await app.service('users').remove(user._id.toString())

    const afterResult = await app.service('users').find({
      paginate: false,
      pipeline: [{ $group: { _id: null, count: { $count: {} } } }]
    })
    const afterCount = (afterResult[0] as any).count

    assert.strictEqual(beforeCount, afterCount + 1)
  })
})
