import { GET_ALL_DOGS, ORDER, ORDER_BYWEIGHT } from './actions-types'
import axios from 'axios'

export const getAllDogs = () => {
    return async (dispacht) => {
        // const resApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`)
        // const dataApi = resApi.data        
        const response = await axios.get('http://localhost:3001/dogs')
        const data = response.data

        return dispacht({
            type: GET_ALL_DOGS,
            payload: data
        })
    }
}

export const orderDogs = (name) => {
    return {type: ORDER, payload: name}
}

export const orderbyWeight = (weight) => {
    return { type: ORDER_BYWEIGHT, payload: weight };
  };