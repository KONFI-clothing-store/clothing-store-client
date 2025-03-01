import React from 'react'

import axios, { AxiosError } from 'axios'

import type { ClothesCardType } from '@/pages/Home/components'

export const useGetAllClothes = () => {
  const [clothes, setClothes] = React.useState<ClothesCardType[]>([])

  const getAllClothes = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${import.meta.env.VITE_API_BASE_URL}/clothes`,
      })
      setClothes(res.data.data)
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          console.log('Server error:', err.response.status, err.response.data)
        } else if (err.request) {
          console.log('Network error:', err.request)
        } else {
          console.log('Unexpected error:', err.message)
        }
      } else {
        console.log('Non-Axios error', err)
      }
    }
  }

  return {
    clothes,
    getAllClothes,
  }
}
