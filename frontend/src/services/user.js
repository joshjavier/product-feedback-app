import axios from 'axios'

const baseUrl = '/api/currentUser'

const get = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  get,
}
