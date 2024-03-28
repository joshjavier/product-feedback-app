import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import currentUser from '../../services/currentUser'

export const fetchCurrentUser = createAsyncThunk(
  'currentUser/fetchCurrentUser',
  currentUser.get,
)

const userSlice = createSlice({
  initialState: null,
  name: 'currentUser',
  reducers: {
    addUpvote: (state, action) => ({
      ...state,
      upvotes: [...state.upvotes, action.payload],
    }),
    removeUpvote: (state, action) => ({
      ...state,
      upvotes: state.upvotes.filter(id => id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        return {
          username: action.payload.username,
          name: action.payload.name,
          image: action.payload.image,
          upvotedFeedbacks: [],
        }
      })
      // .addCase()
      // .addCase()
  },
})

export const { addUpvote, removeUpvote } = userSlice.actions

export default userSlice.reducer
