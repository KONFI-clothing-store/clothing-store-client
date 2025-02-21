import React from 'react'
import { useLocation } from 'react-router-dom'

import axios from 'axios'
import cn from 'classnames'

import { ClothesCard } from '@/components/ui'
import { ClothesCardType } from '@/pages/Home/components'
import { useFilter } from '@/zustand/filter'

import { LIST_OF_URL } from './constants/listOfUrl'
import { useClothesFilter } from './hooks/useClothesFilter'

interface Props {
  className?: string
}

export const GetClothesByPage: React.FC<Props> = ({ className }) => {
  const [clothes, setClothes] = React.useState<ClothesCardType[]>([])
  const [copyOfClothes, setCopyOfClothes] = React.useState<ClothesCardType[]>(
    [],
  )

  const { pathname } = useLocation()

  const isApplyFilter = useFilter((state) => state.isApplyFilter)
  const setApplyFilter = useFilter((state) => state.setApplyFilter)
  const { filter } = useClothesFilter()

  React.useEffect(() => {
    const getClothes = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_API_BASE_URL}/clothes/types/${
            LIST_OF_URL[pathname as keyof typeof LIST_OF_URL]
          }`,
        })

        setClothes(res.data)
        setCopyOfClothes(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    if (!isApplyFilter) {
      getClothes()
    }
  }, [])

  React.useEffect(() => {
    if (isApplyFilter) {
      setClothes(() => filter(copyOfClothes))
      setApplyFilter(false)
    }
  }, [isApplyFilter, filter, setApplyFilter])

  return (
    <div
      className={cn(
        className,
        'grid grid-cols-3 gap-x-5 gap-y-[36px] max-sm:grid-cols-2 max-2xs:grid-cols-1',
      )}
    >
      {clothes.length === 0 ? (
        <p>Noting</p>
      ) : (
        clothes.map((item) => <ClothesCard item={item} key={item.id} />)
      )}
    </div>
  )
}
