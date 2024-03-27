import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { addUpvote, removeUpvote } from '../../reducers/userReducer'
import feedbacksService from '../../services/feedbacks'
import productRequests from '../../services/productRequests'

const feedbacksAdapter = createEntityAdapter()

const initialState = feedbacksAdapter.getInitialState({
  status: 'idle',
  error: null,
})

export const fetchProductRequests = createAsyncThunk(
  'productRequests/fetchProductRequests',
  productRequests.getAll,
)

const feedbacksSlice = createSlice({
  initialState,
  name: 'feedbacks',
  reducers: {
    set: (state, action) => action.payload,
    append: (state, action) => {
      state.push(action.payload)
    },
    update: (state, action) => {
      return state.map(item => item.id === action.payload.id ? action.payload : item)
    },
    incrementUpvote: (state, action) => {
      return state.map(item => item.id === action.payload ? { ...item, upvotes: item.upvotes + 1 } : item)
    },
    decrementUpvote: (state, action) => {
      return state.map(item => item.id === action.payload ? { ...item, upvotes: item.upvotes - 1 } : item)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductRequests.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductRequests.fulfilled, (state, action) => {
        const productRequests = action.payload
        productRequests.forEach((productRequest) => {
          if ('comments' in productRequest) {
            const getIds = (acc, val) => [...acc, val.id]
            const commentIds = productRequest.comments.reduce(getIds, [])
            productRequest.comments = commentIds
          }
        })
        feedbacksAdapter.upsertMany(state, productRequests)

        state.status = 'succeeded'
      })
      .addCase(fetchProductRequests.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { set, append, update, incrementUpvote, decrementUpvote } = feedbacksSlice.actions

export const initializeFeedbacks = () => async (dispatch) => {
  const feedbacks = await feedbacksService.getAll()
  dispatch(set(feedbacks))
}

export const createFeedback = feedback => async (dispatch) => {
  const newFeedback = await feedbacksService.create(feedback)
  dispatch(append(newFeedback))
}

export const upvoteFeedback = id => (dispatch) => {
  dispatch(addUpvote(id))
  dispatch(incrementUpvote(id))
}

export const downvoteFeedback = id => (dispatch) => {
  dispatch(removeUpvote(id))
  dispatch(decrementUpvote(id))
}

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
