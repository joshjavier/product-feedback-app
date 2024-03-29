import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { upvoteFeedback } from '../feedbacks/feedbacksSlice'
import currentUser from '../../services/currentUser'

export const fetchCurrentUser = createAsyncThunk(
  'currentUser/fetchCurrentUser',
  currentUser.get,
)

const userSlice = createSlice({
  initialState: null,
  name: 'currentUser',
  reducers: {},
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
      .addCase(upvoteFeedback.fulfilled, (state, action) => {
        if (state.upvotedFeedbacks.includes(action.payload.id)) {
          return {
            ...state,
            upvotedFeedbacks: state.upvotedFeedbacks.filter(id => id !== action.payload.id),
          }
        } else {
          state.upvotedFeedbacks.push(action.payload.id)
        }
      })
  },
})

export default userSlice.reducer
