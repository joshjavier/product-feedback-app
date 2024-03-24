import { createSlice } from '@reduxjs/toolkit'

export const sortSlice = createSlice({
  initialState: 'mostUpvotes',
  name: 'sort',
  reducers: {
    sortBy: (state, action) => action.payload,
  },
})

export const { sortBy } = sortSlice.actions

export default sortSlice.reducer
