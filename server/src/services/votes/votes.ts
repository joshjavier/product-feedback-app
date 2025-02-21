// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  voteDataValidator,
  votePatchValidator,
  voteQueryValidator,
  voteResolver,
  voteExternalResolver,
  voteDataResolver,
  votePatchResolver,
  voteQueryResolver
} from './votes.schema'

import type { Application } from '../../declarations'
import { VoteService, getOptions } from './votes.class'
import { votePath, voteMethods } from './votes.shared'
import { syncUpvotes } from '../../hooks/sync-upvotes'

export * from './votes.class'
export * from './votes.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const vote = (app: Application) => {
  // Register our service on the Feathers application
  app.use(votePath, new VoteService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: voteMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(votePath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(voteExternalResolver),
        schemaHooks.resolveResult(voteResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(voteQueryValidator), schemaHooks.resolveQuery(voteQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(voteDataValidator), schemaHooks.resolveData(voteDataResolver)],
      patch: [schemaHooks.validateData(votePatchValidator), schemaHooks.resolveData(votePatchResolver)],
      remove: []
    },
    after: {
      all: [],
      create: [syncUpvotes],
      remove: [syncUpvotes]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [votePath]: VoteService
  }
}
