import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchProductRequests, addComment } from '../feedbacks/feedbacksSlice'

const commentsAdapter = createEntityAdapter()

const initialState = commentsAdapter.getInitialState()

const commentsSlice = createSlice({
  initialState,
  name: 'comments',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductRequests.fulfilled, (state, action) => {
        commentsAdapter.upsertMany(state, action.payload.comments)
      })
      .addCase(addComment.fulfilled, (state, action) => {
        commentsAdapter.addOne(state, action.payload.newComment)
      })
  },
})

export default commentsSlice.reducer

export const {
  selectAll: selectAllComments,
  selectById: selectCommentById,
  selectIds: selectCommentIds,
} = commentsAdapter.getSelectors(state => state.comments)
