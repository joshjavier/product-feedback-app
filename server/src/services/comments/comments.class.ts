// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Comment, CommentData, CommentPatch, CommentQuery } from './comments.schema'

export type { Comment, CommentData, CommentPatch, CommentQuery }

export interface CommentParams extends MongoDBAdapterParams<CommentQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class CommentService<ServiceParams extends Params = CommentParams> extends MongoDBService<
  Comment,
  CommentData,
  CommentParams,
  CommentPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then(db => db.collection('comments'))
  }
}
