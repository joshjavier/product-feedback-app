// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { StringEnum, Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { RequestService } from './requests.class'

// Schema for enum fields
export const categorySchema = StringEnum(['enhancement', 'feature', 'bug', 'ui', 'ux'])
export const statusSchema = StringEnum(['suggestion', 'live', 'in-progress', 'planned'], {
  default: 'suggestion'
})
export type Category = Static<typeof categorySchema>
export type Status = Static<typeof statusSchema>

// Main data model schema
export const requestSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    title: Type.String(),
    category: categorySchema,
    status: Type.Optional(statusSchema),
    description: Type.String(),
    upvotes: Type.Number(),
    totalComments: Type.Number()
  },
  { $id: 'Request', additionalProperties: false }
)
export type Request = Static<typeof requestSchema>
export const requestValidator = getValidator(requestSchema, dataValidator)
export const requestResolver = resolve<Request, HookContext<RequestService>>({})

export const requestExternalResolver = resolve<Request, HookContext<RequestService>>({})

// Schema for creating new entries
export const requestDataSchema = Type.Pick(requestSchema, ['title', 'category', 'status', 'description'], {
  $id: 'RequestData'
})
export type RequestData = Static<typeof requestDataSchema>
export const requestDataValidator = getValidator(requestDataSchema, dataValidator)
export const requestDataResolver = resolve<Request, HookContext<RequestService>>({
  status: value => value ?? statusSchema.default
})

// Schema for updating existing entries
export const requestPatchSchema = Type.Partial(requestSchema, {
  $id: 'RequestPatch'
})
export type RequestPatch = Static<typeof requestPatchSchema>
export const requestPatchValidator = getValidator(requestPatchSchema, dataValidator)
export const requestPatchResolver = resolve<Request, HookContext<RequestService>>({})

// Schema for allowed query properties
export const requestQueryProperties = Type.Pick(requestSchema, [
  '_id',
  'title',
  'category',
  'status',
  'description'
])
export const requestQuerySchema = Type.Intersect(
  [
    querySyntax(requestQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type RequestQuery = Static<typeof requestQuerySchema>
export const requestQueryValidator = getValidator(requestQuerySchema, queryValidator)
export const requestQueryResolver = resolve<RequestQuery, HookContext<RequestService>>({})
