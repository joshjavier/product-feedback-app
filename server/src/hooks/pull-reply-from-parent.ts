// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const pullReplyFromParent = async (context: HookContext) => {
  // Get comment id and remove it from `replies` array of parent comment
  const { _id, parentId } = context.result
  if (parentId) {
    const comments = await context.app.service('comments').getModel()
    await comments.updateOne({ _id: parentId }, { $pull: { replies: _id } })
  }
}
