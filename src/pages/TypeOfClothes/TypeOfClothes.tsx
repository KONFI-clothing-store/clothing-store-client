import React from 'react'
import { useLocation } from 'react-router-dom'

import cn from 'classnames'
import { SlidersHorizontal } from 'lucide-react'

import { Breadcrumb, Container } from '@/components/ui'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui'

import { FilterBar, GetClothesByPage } from './components'

interface Props {
  className?: string
}

export const TypeOfClothes: React.FC<Props> = ({ className }) => {
  const { pathname } = useLocation()
  const splitPath = pathname.split('/')[2]
  const title = splitPath[0].toUpperCase() + splitPath.slice(1)

  return (
    <section className={cn(className, '')}>
      <Container>
        <hr className='mb-6' />

        <div>
          <Breadcrumb />
        </div>

        <div className='mb-10 mt-6 flex gap-5 max-lg:justify-center'>
          <FilterBar className='min-h-[605px] self-start max-x-md:hidden' />

          <div className='max-2xs:w-full'>
            <div className='flex justify-between'>
              <h1 className='mb-4 text-2xl font-bold'>{title}</h1>

              {/* Use sheet instead of dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className='grid h-8 w-8 place-content-center rounded-[50%] bg-gray-100'>
                    <SlidersHorizontal
                      size={16}
                      color='#000000'
                      strokeWidth={2}
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className='absolute bottom-0 max-h-[30%] max-w-full translate-y-[-75%] p-0'>
                  {/* <DialogHeader>
                    <DialogTitle>Filters</DialogTitle>
                  </DialogHeader> */}

                  <FilterBar className='w-full flex-col border-none p-[19px]' />
                </DialogContent>
              </Dialog>
            </div>

            <GetClothesByPage className='' />
          </div>
        </div>
      </Container>
    </section>
  )
}
