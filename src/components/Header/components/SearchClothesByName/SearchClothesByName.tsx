import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import cn from 'classnames'
import { Search } from 'lucide-react'

import { AllElements } from './components'

interface Props {
  className?: string
}

export const SearchClothesByName: React.FC<Props> = ({ className }) => {
  const [isActiveSearching, setIsActiveSearching] =
    React.useState<boolean>(true)
  const [width, setWidth] = React.useState<number>(window.innerWidth)
  const [prompt, setPrompt] = React.useState<string>('')
  const [isShowInput, setShowInput] = React.useState<boolean>(false)

  const location = useLocation()

  React.useEffect(() => {
    const handleChangeWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleChangeWidth)

    return () => {
      window.removeEventListener('resize', handleChangeWidth)
    }
  }, [])

  React.useEffect(() => {
    if (prompt.length >= 1) {
      setIsActiveSearching(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.style.overflow = 'hidden'
    } else {
      setIsActiveSearching(false)
      document.body.style.overflow = 'auto'
    }
  }, [prompt])

  React.useEffect(() => {
    setIsActiveSearching(false)
    document.body.style.overflow = 'auto'
  }, [location.pathname])

  return (
    <>
      <div className='flex-1'>
        <div
          className={cn(
            className,
            'flex items-center gap-[14px] rounded-[62px] bg-input px-4 py-3 max-md:bg-transparent max-md:px-0',
          )}
        >
          {width >= 768 ? (
            <>
              <Search width={20} height={20} color='#909090' />
              <input
                type='text'
                placeholder='Search for products by name...'
                className='flex-1 bg-transparent text-[#909090] placeholder:text-[#909090] focus:outline-none'
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
              />
            </>
          ) : (
            <>
              <Search
                width={20}
                height={20}
                onClick={() => setShowInput((prevState) => !prevState)}
              />
              {isShowInput && (
                <input
                  type='text'
                  placeholder='Search for products by name...'
                  className='absolute right-[80px] top-[30px] z-50 w-[250px] rounded-[62px] bg-input p-[16px] text-[#909090] placeholder:text-[#909090] focus:outline-none max-sm:top-[19px]'
                  onChange={(e) => setPrompt(e.target.value)}
                  value={prompt}
                />
              )}
            </>
          )}
        </div>

        {isActiveSearching && <AllElements prompt={prompt} />}
      </div>
    </>
  )
}
