import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: null,
  sort: 'mostUpvotes',
}

export const uiSlice = createSlice({
  initialState,
  name: 'ui',
  reducers: {
    setFilter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
    sortBy: (state, action) => ({
      ...state,
      sort: action.payload,
    }),
  },
})

export const { setFilter, sortBy } = uiSlice.actions

export default uiSlice.reducer
