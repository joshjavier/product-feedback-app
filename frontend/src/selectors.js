import { createSelector } from '@reduxjs/toolkit'
import { selectAllFeedbacks } from './features/feedbacks/feedbacksSlice'

export const selectStatusCount = createSelector(
  [selectAllFeedbacks],
  (feedbacks) => {
    return feedbacks.reduce((count, item) => {
      count[item.status] = (count[item.status] || 0) + 1
      return count
    }, {})
  },
)

export const selectUpvotes = state => state.currentUser?.upvotes
