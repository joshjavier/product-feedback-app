// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Comment, CommentData, CommentPatch, CommentQuery, CommentService } from './comments.class'

export type { Comment, CommentData, CommentPatch, CommentQuery }

export type CommentClientService = Pick<CommentService<Params<CommentQuery>>, (typeof commentMethods)[number]>

export const commentPath = 'requests/:requestId/comments'

export const commentMethods: Array<keyof CommentService> = ['find', 'get', 'create', 'patch', 'remove']

export const commentClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(commentPath, connection.service(commentPath), {
    methods: commentMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [commentPath]: CommentClientService
  }
}
