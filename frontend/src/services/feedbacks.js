import axios from 'axios'

const baseUrl = '/api/productRequests'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async ({ title, category, description }) => {
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

export default {
  getAll,
  create,
}
