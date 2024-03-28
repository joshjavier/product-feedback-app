import { createSlice } from '@reduxjs/toolkit'
import userService from '../../services/user'

const userSlice = createSlice({
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

export const initializeUser = () => async (dispatch) => {
  const user = await userService.get()
  user.upvotes = []
  dispatch(set(user))
}

export default userSlice.reducer
