import express from 'express'
import { HydratedDocument } from 'mongoose'
import Feedback, { IFeedback } from '../models/feedback'

const router = express.Router()

router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find({})
  res.send(feedbacks)
})

router.post('/', async (req, res) => {
  const { title, category, upvotes, status, description } = req.body

  const feedback: HydratedDocument<IFeedback> = new Feedback({
    title,
    category,
    upvotes,
    status,
    description,
  })

  await feedback.save()
  res.send(feedback)
})

router.get('/:id', async (req, res) => {
  const feedback = await Feedback.findById(req.params.id)

  if (feedback) {
    res.send(feedback)
  } else {
    res.status(404).json({ error: 'Feedback not found' })
  }
})

export default router
