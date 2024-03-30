import axios from 'axios'

const baseUrl = '/api/productRequests'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createOne = async ({ title, category, description }) => {
  const newFeedback = {
    title,
    category,
    description,
    status: 'suggestion',
    upvotes: 0,
  }
  const response = await axios.post(baseUrl, newFeedback)
  return response.data
}

const updateOne = async ({ id, ...changes }) => {
  const response = await axios.patch(`${baseUrl}/${id}`, changes)
  return response.data
}

export default {
  getAll,
  createOne,
  updateOne,
}
