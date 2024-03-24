import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  initialState: null,
  name: 'filter',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer

export const selectFilter = state => state.filter
