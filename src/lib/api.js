import axios from 'axios'

// const baseUrl = 'https://api.thecatapi.com/v1/images/search'

const baseUrl = 'https://api.thecatapi.com/v1/breeds'

function headers() {
  return {
    headers: { 'x-api-key': '08fa704d-3e5d-40a6-ad0b-df6490b61e59' } ,
  }
}

export function getAllCats() {
  return axios.get(`${baseUrl}`, headers())
}

export function getSingleCat(catId) {
  return axios.get(`${baseUrl}/cats/${catId}`, headers())
}