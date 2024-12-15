import mongoose, { ConnectOptions } from 'mongoose'
import { mongodb } from './config'

declare global {
  var mongoose: any
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const clientOptions: ConnectOptions = {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      }
    }
    cached.promise = mongoose.connect(mongodb.uri, clientOptions)
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
