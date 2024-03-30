import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'
import productRequests from '../../services/productRequests'

// Define schemas
const user = new schema.Entity('users', {}, { idAttribute: 'username' })
const comment = new schema.Entity('comments', { user })
const feedback = new schema.Entity('feedbacks', { comments: [comment] })

const feedbacksAdapter = createEntityAdapter()

const initialState = feedbacksAdapter.getInitialState({
  status: 'idle',
  error: null,
})

export const fetchProductRequests = createAsyncThunk(
  'productRequests/fetchProductRequests',
  async () => {
    const data = await productRequests.getAll()
    const normalized = normalize(data, [feedback])
    return normalized.entities
  },
)

const feedbacksSlice = createSlice({
  initialState,
  name: 'feedbacks',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductRequests.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductRequests.fulfilled, (state, action) => {
        feedbacksAdapter.upsertMany(state, action.payload.feedbacks)
        state.status = 'succeeded'
      })
      .addCase(fetchProductRequests.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(upvoteFeedback.fulfilled, feedbacksAdapter.updateOne)
      .addCase(updateFeedback.fulfilled, feedbacksAdapter.updateOne)
      .addCase(createFeedback.fulfilled, feedbacksAdapter.addOne)
      .addCase(addComment.fulfilled, (state, action) => {
        feedbacksAdapter.updateOne(state, {
          id: action.payload.id,
          changes: {
            comments: action.payload.commentIds,
          },
        })
      })
  },
})

export const { set, append, update, incrementUpvote, decrementUpvote } = feedbacksSlice.actions

export const createFeedback = createAsyncThunk(
  'feedbacks/createFeedback',
  productRequests.createOne,
)

export const updateFeedback = createAsyncThunk(
  'feedbacks/updateFeedback',
  async ({ id, ...changes }) => {
    await productRequests.updateOne({ id, ...changes })
    return { id, changes }
  },
)

export const upvoteFeedback = createAsyncThunk(
  'feedbacks/upvoteFeedback',
  async (id, { getState }) => {
    let vote, { upvotedFeedbacks } = getState().currentUser
    const isUpvoted = upvotedFeedbacks.includes(id)

    if (isUpvoted) {
      vote = -1
      upvotedFeedbacks = upvotedFeedbacks.filter(feedbackId => feedbackId !== id)
    } else {
      vote = 1
      upvotedFeedbacks = [...upvotedFeedbacks, id]
    }

    const upvotes = selectFeedbackById(getState(), id).upvotes + vote

    // API calls here
    // await productRequests.updateOne({ id, upvotes })
    // await currentUser.update({ upvotedFeedbacks })

    return { id, changes: { upvotes } }
  },
)

export const addComment = createAsyncThunk(
  'feedbacks/addComment',
  async ({ id, content }, { getState }) => {
    const user = getState().currentUser.username
    const newComment = { id: nanoid(), content, user }
    const commentIds = selectFeedbackById(getState(), id).comments.concat(newComment.id)

    // API calls here
    // await productRequests.updateOne({ id, comments })

    return { id, commentIds, newComment }
  },
)

export default feedbacksSlice.reducer

export const {
  selectAll: selectAllFeedbacks,
  selectById: selectFeedbackById,
  selectIds: selectFeedbackIds,
} = feedbacksAdapter.getSelectors(state => state.feedbacks)

export const selectFeedbacksByStatus = createSelector(
  [selectAllFeedbacks, (state, status) => status],
  (feedbacks, status) => feedbacks.filter(feedback => feedback.status === status),
)

export const selectFilteredFeedbacks = createSelector(
  [selectFeedbacksByStatus, state => state.ui.filter],
  (feedbacks, category) => {
    return category
      ? feedbacks.filter(feedback => feedback.category === category)
      : feedbacks
  },
)

export const selectSortedFeedbacks = createSelector(
  [selectFilteredFeedbacks, state => state.ui.sort],
  (feedbacks, sort) => {
    const compareFn = {
      mostUpvotes: (a, b) => b.upvotes - a.upvotes,
      leastUpvotes: (a, b) => a.upvotes - b.upvotes,
      mostComments: (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0),
      leastComments: (a, b) => (a.comments?.length || 0) - (b.comments?.length || 0),
    }
    return feedbacks.toSorted(compareFn[sort])
  },
)
