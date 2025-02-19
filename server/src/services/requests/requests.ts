// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  requestDataValidator,
  requestPatchValidator,
  requestQueryValidator,
  requestResolver,
  requestExternalResolver,
  requestDataResolver,
  requestPatchResolver,
  requestQueryResolver
} from './requests.schema'

import type { Application } from '../../declarations'
import { RequestService, getOptions } from './requests.class'
import { requestPath, requestMethods } from './requests.shared'
import { getCountByStatus } from '../../hooks/get-count-by-status'

export * from './requests.class'
export * from './requests.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const request = (app: Application) => {
  // Register our service on the Feathers application
  app.use(requestPath, new RequestService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: requestMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(requestPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(requestExternalResolver), schemaHooks.resolveResult(requestResolver)],
      create: [authenticate('jwt')],
      update: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')]
    },
    before: {
      all: [schemaHooks.validateQuery(requestQueryValidator), schemaHooks.resolveQuery(requestQueryResolver)],
      find: [getCountByStatus],
      get: [],
      create: [schemaHooks.validateData(requestDataValidator), schemaHooks.resolveData(requestDataResolver)],
      patch: [schemaHooks.validateData(requestPatchValidator), schemaHooks.resolveData(requestPatchResolver)],
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
    [requestPath]: RequestService
  }
}
