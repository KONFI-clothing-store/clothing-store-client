import React from 'react'

import axios from 'axios'

import type { ClothesCardType } from '@/pages/Home/components'

export const useGetClothes = (typeOfClothes: 'all' | 'latest' | 'rating') => {
  const [data, setData] = React.useState<ClothesCardType[]>([])
  const [numberOfElements, setNumberOfElements] = React.useState<number>(0)
  const [offsetState, setOffsetState] = React.useState<number>(0)

  const getData = React.useCallback(
    (
      url: string,
      params: {
        limit: number
        offset: number
        order?: string
      },
    ) => {
      axios({
        method: 'GET',
        url,
        params,
      }).then((res) => {
        setNumberOfElements(res.data.numberOfElements)

        setData((prevState: ClothesCardType[]) => {
          if (!res.data.numberOfElements) return prevState

          if (prevState[0]?.name === res.data?.data[0]?.name) {
            return res.data.data
          }

          return [...prevState, ...res.data.data]
        })
      })
    },
    [],
  )

  React.useEffect(() => {
    getData(`${import.meta.env.VITE_API_BASE_URL}/clothes/${typeOfClothes}`, {
      limit: 4,
      offset: offsetState * 4,
    })

    setOffsetState(1)
  }, [getData, setOffsetState])

  const addNewBatchOfClothes = () => {
    getData(`${import.meta.env.VITE_API_BASE_URL}/clothes/${typeOfClothes}`, {
      limit: 4,
      offset: offsetState * 4,
    })

    setOffsetState((prevState) => prevState + 1)
  }

  return { data, getData, numberOfElements, addNewBatchOfClothes }
}
