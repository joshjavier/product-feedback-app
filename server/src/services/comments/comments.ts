// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  commentDataValidator,
  commentPatchValidator,
  commentQueryValidator,
  commentResolver,
  commentExternalResolver,
  commentDataResolver,
  commentPatchResolver,
  commentQueryResolver
} from './comments.schema'

import type { Application } from '../../declarations'
import { CommentService, getOptions } from './comments.class'
import { commentPath, commentMethods } from './comments.shared'
import { logRuntime } from '../../hooks/log-runtime'
import { resolveCommentTree } from '../../hooks/resolve-comment-tree'

export * from './comments.class'
export * from './comments.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const comment = (app: Application) => {
  // Register our service on the Feathers application
  app.use(commentPath, new CommentService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: commentMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(commentPath).hooks({
    around: {
      all: [
        logRuntime,
        schemaHooks.resolveExternal(commentExternalResolver),
        schemaHooks.resolveResult(commentResolver)
      ],
      create: [authenticate('jwt')],
      update: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(commentQueryValidator),
        schemaHooks.resolveQuery(commentQueryResolver),
        resolveCommentTree
      ],
      find: [],
      get: [],
      create: [schemaHooks.validateData(commentDataValidator), schemaHooks.resolveData(commentDataResolver)],
      patch: [schemaHooks.validateData(commentPatchValidator), schemaHooks.resolveData(commentPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [commentPath]: CommentService
  }
}
