import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchProductRequests } from '../feedbacks/feedbacksSlice'
import { fetchCurrentUser } from '../currentUser/currentUserSlice'

const usersAdapter = createEntityAdapter({
  selectId: user => user.username,
})

const initialState = usersAdapter.getInitialState()

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductRequests.fulfilled, (state, action) => {
        usersAdapter.upsertMany(state, action.payload.users)
      })
      .addCase(fetchCurrentUser.fulfilled, usersAdapter.upsertOne)
  },
})

export default usersSlice.reducer

export const {
  selectAll: selectAllUsers,
  selectById: selectUserByUsername,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(state => state.users)
