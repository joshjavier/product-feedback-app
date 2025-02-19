// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const decrementCommentCount = async (context: HookContext) => {
  // Get the requestId
  const { requestId } = context.result
  // Get the MongoDB requests collection
  const requests = await context.app.service('requests').getModel()
  // Increment comment count of associated request by 1
  await requests.updateOne({ _id: requestId }, { $inc: { totalComments: -1 } })
}
