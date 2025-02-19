// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'
import { RequestData } from '../../../src/client'

describe('requests service', () => {
  it('registered the service', () => {
    const service = app.service('requests')

    assert.ok(service, 'Registered the service')
  })

  it('finds all requests', async () => {
    const requests = await app.service('requests').find()

    assert.ok(Array.isArray(requests.data))
  })

  it('creates a new feedback request', async () => {
    const requestData: RequestData = {
      title: "App doesn't load",
      category: 'bug',
      description: "I can't get past the homescreen"
    }

    const newRequest = await app.service('requests').create(requestData)

    const [latestRequest] = await app.service('requests').find({
      query: { $sort: { _id: -1 }, $limit: 1 },
      paginate: false
    })

    assert.deepStrictEqual(newRequest._id, latestRequest._id)

    await app.service('requests').remove(newRequest._id.toString())
  })

  it('updates an existing request', async () => {
    const requestData: RequestData = {
      title: 'Add a downvote button',
      category: 'bug',
      description: 'Like the one on YouTube'
    }

    const newRequest = await app.service('requests').create(requestData)

    const updatedRequest = await app.service('requests').patch(newRequest._id.toString(), {
      category: 'feature',
      description:
        'To serve as additional signal to help your development team decide which requests to prioritize.'
    })

    assert.strictEqual(updatedRequest.category, 'feature')

    await app.service('requests').remove(newRequest._id.toString())
  })

  it('deletes an existing request', async () => {
    const newRequest = await app.service('requests').create({
      title: 'Delete me',
      category: 'bug',
      description: 'To live is to die'
    })

    const beforeCount = await app.service('requests').countDocuments({})

    await app.service('requests').remove(newRequest._id.toString())

    const afterCount = await app.service('requests').countDocuments({})

    assert.strictEqual(beforeCount, afterCount + 1)
  })
})
