import { Schema, model, models } from 'mongoose'

export interface IUser {
  name: string
  username: string
  avatar?: string
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: [true, 'Username is already taken'],
    lowercase: true,
    trim: true,
    minLength: 6,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
})

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    // remove the _id of every document before returning the result
    delete ret._id
    return ret
  },
})

const User = models.User || model<IUser>('User', userSchema)

export default User
