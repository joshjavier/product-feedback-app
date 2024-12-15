import { Schema, model, models } from 'mongoose'

export interface IFeedback {
  title: string
  category: string
  upvotes?: number
  status: string
  description: string
}

enum Category {
  Enhancement = 'enhancement',
  Feature = 'feature',
  Bug = 'bug',
  UI = 'ui',
  UX = 'ux',
}

enum Status {
  Suggestion = 'suggestion',
  Planned = 'planned',
  InProgress = 'in-progress',
  Live = 'live',
}

const feedbackSchema = new Schema<IFeedback>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(Category),
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    required: true,
    enum: Object.values(Status),
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
})

feedbackSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    // remove the _id of every document before returning the result
    delete ret._id
    return ret
  },
})

const Feedback = models.Feedback || model<IFeedback>('Feedback', feedbackSchema)

export default Feedback
