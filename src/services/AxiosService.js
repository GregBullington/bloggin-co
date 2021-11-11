import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const blogsApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/blogs',
  timeout: 8000
})
