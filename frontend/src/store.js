import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import feedbacksReducer from './reducers/feedbacksReducer'
import filterReducer from './reducers/filterReducer'

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    productRequests: feedbacksReducer,
    filter: filterReducer,
  },
})
