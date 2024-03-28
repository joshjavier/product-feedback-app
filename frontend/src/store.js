import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import feedbacksReducer from './features/feedbacks/feedbacksSlice'
import commentsReducer from './features/comments/commentsSlice'
import usersReducer from './features/users/usersSlice'
import uiReducer from './features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    feedbacks: feedbacksReducer,
    comments: commentsReducer,
    users: usersReducer,
    ui: uiReducer,
  },
})
