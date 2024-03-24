import { createSelector } from '@reduxjs/toolkit'

export const selectFeedbacks = state => state.productRequests
export const selectFilter = state => state.filter

export const selectSuggestions = createSelector(
  [selectFeedbacks, selectFilter],
  (feedbacks, filter) => {
    const suggestions = feedbacks.filter(item => item.status === 'suggestion')

    return filter
      ? suggestions.filter(item => item.category === filter)
      : suggestions
  },
)
