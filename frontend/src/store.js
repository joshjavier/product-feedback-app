import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import feedbacksReducer from './reducers/feedbacksReducer'
import filterReducer from './reducers/filterReducer'
import sortReducer from './reducers/sortReducer'

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    productRequests: feedbacksReducer,
    filter: filterReducer,
    sort: sortReducer,
  },
})
