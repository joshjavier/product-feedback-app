// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'
import { CommentData } from '../../../src/client'

describe('comments service', () => {
  it('registered the service', () => {
    const service = app.service('comments')

    assert.ok(service, 'Registered the service')
  })

  it('finds comments of a request', async () => {
    const [request] = await app.service('requests').find({ query: { $limit: 1 }, paginate: false })
    const comments = await app.service('comments').find({ query: { requestId: request._id } })

    assert.strictEqual(request.totalComments, comments.total)
  })

  it('shows the comment tree of a request', async () => {
    const [request] = await app.service('requests').find({ query: { $limit: 1 }, paginate: false })
    const result = await app.service('comments').find({ query: { requestId: request._id, tree: '' } })

    const comment = (result as any)[0]

    // The `user` field should be populated
    assert.ok(comment.user)
    // Fields not needed in the frontend should be removed
    assert.ok(!comment.requestId)
    assert.ok(!comment.userId)
  })

  it('adds a comment to a request', async () => {
    const [request] = await app.service('requests').find({ query: { $limit: 1 }, paginate: false })
    const commentData: CommentData = { content: 'that sounds cool', requestId: request._id }
    const newComment = await app.service('comments').create(commentData)

    const [latestComment] = await app
      .service('comments')
      .find({ query: { requestId: request._id, $sort: { _id: -1 }, $limit: 1 }, paginate: false })

    assert.deepStrictEqual(newComment._id, latestComment._id)

    await app.service('comments').remove(newComment._id.toString())
  })

  it('replies to a comment', async () => {
    const [parent] = await app.service('comments').find({ query: { $limit: 1 }, paginate: false })
    const nested = await app.service('comments').create({
      content: 'this is a nested comment',
      parentId: parent._id,
      requestId: parent.requestId
    })

    const parentAfter = await app.service('comments').get(parent._id.toString())
    assert.strictEqual(parentAfter.replies?.length, 1)
    assert.deepStrictEqual(nested.parentId, parentAfter._id)

    await app.service('comments').remove(nested._id.toString())
  })

  it('deletes a comment', async () => {
    const [request] = await app.service('requests').find({ query: { $limit: 1 }, paginate: false })
    const comment = await app.service('comments').create({
      content: 'delete me',
      requestId: request._id
    })

    const beforeCount = await app.service('comments').countDocuments({})
    const requestBefore = await app.service('requests').get(request._id.toString())

    await app.service('comments').remove(comment._id.toString())

    const afterCount = await app.service('comments').countDocuments({})
    const requestAfter = await app.service('requests').get(request._id.toString())

    assert.strictEqual(beforeCount, afterCount + 1)
    assert.strictEqual(requestBefore.totalComments, requestAfter.totalComments + 1)
  })

  it('updates a comment', async () => {
    const [request] = await app.service('requests').find({ query: { $limit: 1 }, paginate: false })
    const comment = await app.service('comments').create({
      content: 'update me',
      requestId: request._id
    })

    const updated = await app.service('comments').patch(comment._id.toString(), { content: 'updated' })

    assert.deepStrictEqual(comment._id, updated._id)
    assert.strictEqual(updated.content, 'updated')

    await app.service('comments').remove(comment._id.toString())
  })
})
