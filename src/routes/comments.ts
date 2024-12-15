import express, { Request } from 'express'
import { HydratedDocument } from 'mongoose'
import Comment, { IComment } from '../models/comment'

const router = express.Router({ mergeParams: true })

router.get('/', async (req: Request<{ id: string }>, res) => {
  const comments = await Comment
    .find({ feedback: req.params.id }, '-feedback')
    .populate('from')
  res.send(comments)
})

router.post('/', async (req: Request<{ id: string }>, res) => {
  const { id: feedback } = req.params
  const { content, from, replying_to, parent } = req.body

  const doc = parent && replying_to
    ? { content, from, replying_to, parent, feedback }
    : { content, from, feedback }

  const comment: HydratedDocument<IComment> = new Comment(doc)
  await comment.save()
  await comment.populate('from')
  res.send(comment)
})

router.get('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (comment) {
    res.send(comment)
  } else {
    res.status(404).json({ error: 'Comment not found' })
  }
})

export default router
