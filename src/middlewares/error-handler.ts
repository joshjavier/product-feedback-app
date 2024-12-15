import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handle Mongoose errors
  if (err instanceof mongoose.Error) {
    console.log(err)
    res.status(400).json({ error: err.message })
    return
  }

  // Handle MongoDB's E11000 duplicate key error
  if (err.message.includes('duplicate key error')) {
    res.status(400).json({ error: err.message })
    return
  }

  next(err)
}

export default errorHandler
