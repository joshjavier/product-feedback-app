// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'

describe('comments service', () => {
  it('registered the service', () => {
    const service = app.service('comments')

    assert.ok(service, 'Registered the service')
  })

  it('finds comments of a request', async () => {
    const [request] = await app.service('requests').find({ query: { $limit: 1 }, paginate: false })
    const comments = await app
      .service('comments')
      .find({ query: { requestId: request._id }, paginate: false })

    assert.strictEqual(request.totalComments, comments.length)
  })

  it('adds a comment to a request', async () => {})

  it('replies to a comment', () => {})

  it('deletes a comment', () => {})
})
