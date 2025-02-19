// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { CommentService } from './comments.class'

// Main data model schema
export const commentSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    text: Type.String()
  },
  { $id: 'Comment', additionalProperties: false }
)
export type Comment = Static<typeof commentSchema>
export const commentValidator = getValidator(commentSchema, dataValidator)
export const commentResolver = resolve<Comment, HookContext<CommentService>>({})

export const commentExternalResolver = resolve<Comment, HookContext<CommentService>>({})

// Schema for creating new entries
export const commentDataSchema = Type.Pick(commentSchema, ['text'], {
  $id: 'CommentData'
})
export type CommentData = Static<typeof commentDataSchema>
export const commentDataValidator = getValidator(commentDataSchema, dataValidator)
export const commentDataResolver = resolve<Comment, HookContext<CommentService>>({})

// Schema for updating existing entries
export const commentPatchSchema = Type.Partial(commentSchema, {
  $id: 'CommentPatch'
})
export type CommentPatch = Static<typeof commentPatchSchema>
export const commentPatchValidator = getValidator(commentPatchSchema, dataValidator)
export const commentPatchResolver = resolve<Comment, HookContext<CommentService>>({})

// Schema for allowed query properties
export const commentQueryProperties = Type.Pick(commentSchema, ['_id', 'text'])
export const commentQuerySchema = Type.Intersect(
  [
    querySyntax(commentQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type CommentQuery = Static<typeof commentQuerySchema>
export const commentQueryValidator = getValidator(commentQuerySchema, queryValidator)
export const commentQueryResolver = resolve<CommentQuery, HookContext<CommentService>>({})
