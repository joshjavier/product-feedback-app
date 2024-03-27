import { createSelector } from '@reduxjs/toolkit'
import { selectAllFeedbacks } from './features/feedbacks/feedbacksSlice'

export const selectFeedbacks = state => state.productRequests
export const selectFilter = state => state.ui.filter
export const selectSort = state => state.ui.sort

const sortBy = {
  mostUpvotes: (a, b) => b.upvotes - a.upvotes,
  leastUpvotes: (a, b) => a.upvotes - b.upvotes,
  mostComments: (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0),
  leastComments: (a, b) => (a.comments?.length || 0) - (b.comments?.length || 0),
}

export const selectSuggestions = createSelector(
  [selectAllFeedbacks, selectFilter, selectSort],
  (feedbacks, filter, sort) => {
    const suggestions = feedbacks.filter(item => item.status === 'suggestion')
    const compareFn = sortBy[sort]
    suggestions.sort(compareFn)

    return filter
      ? suggestions.filter(item => item.category === filter)
      : suggestions
  },
)

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
