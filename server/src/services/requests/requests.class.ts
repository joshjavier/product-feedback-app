// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Request, RequestData, RequestPatch, RequestQuery, Status } from './requests.schema'

export type { Request, RequestData, RequestPatch, RequestQuery }

export interface RequestParams extends MongoDBAdapterParams<RequestQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class RequestService<ServiceParams extends Params = RequestParams> extends MongoDBService<
  Request,
  RequestData,
  RequestParams,
  RequestPatch
> {
  async getCountByStatus(data: any, params: ServiceParams): Promise<{ status: Status; count: number }[]> {
    const result = await this._find({
      paginate: false,
      pipeline: [
        { $group: { _id: '$status', count: { $count: {} } } },
        { $project: { _id: 0, status: '$_id', count: '$count' } }
      ]
    })

    return result as any as { status: Status; count: number }[]
  }
}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then(db => db.collection('requests'))
  }
}
