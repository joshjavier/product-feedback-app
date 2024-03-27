import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import feedbacksReducer from './reducers/feedbacksReducer'
import uiReducer from './reducers/uiReducer'

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    feedbacks: feedbacksReducer,
    ui: uiReducer,
  },
})
