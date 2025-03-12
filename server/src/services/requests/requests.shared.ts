// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Request, RequestData, RequestPatch, RequestQuery, RequestService } from './requests.class'

export type { Request, RequestData, RequestPatch, RequestQuery }

export type RequestClientService = Pick<RequestService<Params<RequestQuery>>, (typeof requestMethods)[number]>

export const requestPath = 'requests'

export const requestMethods: Array<keyof RequestService> = [
  'find',
  'get',
  'create',
  'patch',
  'remove',
  'getRoadmap'
]

export const requestClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(requestPath, connection.service(requestPath), {
    methods: requestMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [requestPath]: RequestClientService
  }
}
