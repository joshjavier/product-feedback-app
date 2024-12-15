import {
  HydratedDocument,
  Model,
  Schema,
  Types,
  model,
  models,
} from 'mongoose'

export interface IComment {
  content: string
  from: Types.ObjectId
  replying_to?: string
  parent?: Types.ObjectId
  feedback?: Types.ObjectId
}

// interface IReply {
//   _id: Types.ObjectId
//   content: string
//   replyingTo: string
//   user: Types.ObjectId
// }

// type THydratedCommentDocument = HydratedDocument<
//   IComment,
//   { replies?: Types.DocumentArray<IReply> }
// >
// type CommentModelType = Model<Comment, {}, {}, {}, THydratedCommentDocument>

// const replySchema = new Schema<IReply>({
//   content: { type: String, required: true, trim: true },
//   replyingTo: { type: String, required: true, trim: true },
//   user: { type: Schema.Types.ObjectId, ref: 'User' },
// })

const commentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  replying_to: {
    type: String,
    trim: true,
  },
  feedback: {
    type: Schema.Types.ObjectId,
    ref: 'Feedback',
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },
})

commentSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    // remove the _id of every document before returning the result
    delete ret._id
    return ret
  },
})

const Comment = models.Comment || model<IComment>('Comment', commentSchema)

export default Comment
