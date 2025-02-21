// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Vote, VoteData, VotePatch, VoteQuery } from './votes.schema'

export type { Vote, VoteData, VotePatch, VoteQuery }

export interface VoteParams extends MongoDBAdapterParams<VoteQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class VoteService<ServiceParams extends Params = VoteParams> extends MongoDBService<
  Vote,
  VoteData,
  VoteParams,
  VotePatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app
      .get('mongodbClient')
      .then(db => db.collection('votes'))
      .then(collection => {
        collection.createIndex({ requestId: 1, userId: 1 }, { unique: true })
        return collection
      }),
    multi: ['remove']
  }
}
