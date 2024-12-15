import express from 'express'
import { HydratedDocument } from 'mongoose'
import User, { IUser } from '../models/user'

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await User.find({})
  res.send(users)
})

router.post('/', async (req, res) => {
  const { name, username, avatar } = req.body
  const user: HydratedDocument<IUser> = new User({ name, username, avatar })
  await user.save()
  res.send(user)
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    res.send(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

export default router
