// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const syncUpvotes = async (context: HookContext) => {
  if (!['create', 'remove'].includes(context.method)) return

  const requestsCollection = await context.app.service('requests').getModel()
  const usersCollection = await context.app.service('users').getModel()

  if (context.method === 'create') {
    const { requestId, userId } = context.result
    await requestsCollection.updateOne({ _id: requestId }, { $inc: { upvotes: 1 } })
    await usersCollection.updateOne({ _id: userId }, { $push: { upvotedIds: requestId } })
  }

  if (context.method === 'remove') {
    const { requestId, userId } = context.result[0]
    await requestsCollection.updateOne({ _id: requestId }, { $inc: { upvotes: -1 } })
    await usersCollection.updateOne({ _id: userId }, { $pull: { upvotedIds: requestId } })
  }
}
