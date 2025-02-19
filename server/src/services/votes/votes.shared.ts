// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Vote, VoteData, VotePatch, VoteQuery, VoteService } from './votes.class'

export type { Vote, VoteData, VotePatch, VoteQuery }

export type VoteClientService = Pick<VoteService<Params<VoteQuery>>, (typeof voteMethods)[number]>

export const votePath = 'votes'

export const voteMethods: Array<keyof VoteService> = ['find', 'get', 'create', 'patch', 'remove']

export const voteClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(votePath, connection.service(votePath), {
    methods: voteMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [votePath]: VoteClientService
  }
}
