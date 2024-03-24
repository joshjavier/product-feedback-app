import { createSlice } from '@reduxjs/toolkit'
import { addUpvote, removeUpvote } from './userReducer'

export const feedbacksSlice = createSlice({
  initialState: [],
  name: 'productRequests',
  reducers: {
    set: (state, action) => action.payload,
    append: (state, action) => {
      state.push(action.payload)
    },
    update: (state, action) => {
      return state.map(item => item.id === action.payload.id ? action.payload : item)
    },
    upvote: (state, action) => {
      return state.map(item => item.id === action.payload ? { ...item, upvotes: item.upvotes + 1 } : item)
    },
    downvote: (state, action) => {
      return state.map(item => item.id === action.payload ? { ...item, upvotes: item.upvotes - 1 } : item)
    },
  },
})

export const { set, append, update, upvote, downvote } = feedbacksSlice.actions

export const upvoteFeedback = id => (dispatch) => {
  dispatch(addUpvote(id))
  dispatch(upvote(id))
}

export const downvoteFeedback = id => (dispatch) => {
  dispatch(removeUpvote(id))
  dispatch(downvote(id))
}

export default feedbacksSlice.reducer
