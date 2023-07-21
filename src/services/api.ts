import axios from 'axios'

import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE,
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getBebidas = () => api.get<SnackData[]>('/bebidas')
export const getSobremesas = () => api.get<SnackData[]>('/sobremesas')

export default api
