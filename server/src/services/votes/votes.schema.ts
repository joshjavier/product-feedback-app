// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { VoteService } from './votes.class'

// Main data model schema
export const voteSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    userId: ObjectIdSchema(),
    requestId: ObjectIdSchema(),
    createdAt: Type.Number()
  },
  { $id: 'Vote', additionalProperties: false }
)
export type Vote = Static<typeof voteSchema>
export const voteValidator = getValidator(voteSchema, dataValidator)
export const voteResolver = resolve<Vote, HookContext<VoteService>>({})

export const voteExternalResolver = resolve<Vote, HookContext<VoteService>>({})

// Schema for creating new entries
export const voteDataSchema = Type.Pick(voteSchema, ['requestId'], {
  $id: 'VoteData'
})
export type VoteData = Static<typeof voteDataSchema>
export const voteDataValidator = getValidator(voteDataSchema, dataValidator)
export const voteDataResolver = resolve<Vote, HookContext<VoteService>>({
  userId: (value, vote, context) => {
    if (context.params.user) {
      return context.params.user._id
    }
  },
  createdAt: () => Date.now()
})

// Schema for updating existing entries
export const votePatchSchema = Type.Partial(voteSchema, {
  $id: 'VotePatch'
})
export type VotePatch = Static<typeof votePatchSchema>
export const votePatchValidator = getValidator(votePatchSchema, dataValidator)
export const votePatchResolver = resolve<Vote, HookContext<VoteService>>({})

// Schema for allowed query properties
export const voteQueryProperties = Type.Pick(voteSchema, ['_id', 'requestId', 'userId'])
export const voteQuerySchema = Type.Intersect(
  [
    querySyntax(voteQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type VoteQuery = Static<typeof voteQuerySchema>
export const voteQueryValidator = getValidator(voteQuerySchema, queryValidator)
export const voteQueryResolver = resolve<VoteQuery, HookContext<VoteService>>({
  userId: (value, vote, context) => {
    // We need to map the userId from the authenticated user when:
    if (
      // 1. removing an upvote from a request
      context.method === 'remove' ||
      // 2. getting all the upvoted requests by a user
      (context.method === 'find' && context.params.query?.requestId === undefined)
    ) {
      return context.params.user?._id
    }
  },
  // Make sure we can only delete one vote at a time
  $limit: (value, vote, context) => {
    if (context.method === 'remove') {
      return 1
    }
  }
})
