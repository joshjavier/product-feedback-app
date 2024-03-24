import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  initialState: null,
  name: 'currentUser',
  reducers: {
    set: (state, action) => action.payload,
    clear: () => null,
    addUpvote: (state, action) => ({
      ...state,
      upvotes: [...state.upvotes, action.payload],
    }),
    removeUpvote: (state, action) => ({
      ...state,
      upvotes: state.upvotes.filter(id => id !== action.payload),
    }),
  },
})

export const { set, clear, addUpvote, removeUpvote } = userSlice.actions

export default userSlice.reducer
