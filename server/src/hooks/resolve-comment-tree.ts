// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const resolveCommentTree = async (context: HookContext) => {
  if (context.params.query.tree === undefined) return

  context.params.paginate = false

  // Remove `tree` from the query so it doesn't get added to the pipeline
  context.params.query.tree = undefined

  context.params.pipeline = [
    { $match: { parentId: null } },
    {
      $lookup: {
        from: 'comments',
        localField: 'replies',
        foreignField: '_id',
        as: 'replies',
        pipeline: [
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'user',
              pipeline: [{ $unset: ['_id', 'password'] }]
            }
          },
          { $unwind: '$user' },
          { $unset: ['requestId', 'userId'] }
        ]
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
        pipeline: [{ $unset: ['_id', 'password'] }]
      }
    },
    { $unwind: '$user' },
    {
      $project: {
        content: 1,
        user: 1,
        replies: { $cond: { if: { $eq: [0, { $size: '$replies' }] }, then: '$$REMOVE', else: '$replies' } }
      }
    }
  ]
}
