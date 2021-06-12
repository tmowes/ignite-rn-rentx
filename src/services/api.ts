import axios from 'axios'

export const api = axios.create({
  // baseURL: 'localhost:3333',
  // baseURL: 'http://10.0.2.2:3333',
  baseURL: 'http://192.168.2.103:3333',
  // baseURL: 'http://192.168.43.184:3333',
})
