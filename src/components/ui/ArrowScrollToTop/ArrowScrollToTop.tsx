import React from 'react'

import cn from 'classnames'
import { ChevronUp } from 'lucide-react'

interface Props {
  className?: string
}

export const ArrowScrollToTop: React.FC<Props> = ({ className }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.addEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <button
        className={cn(
          className,
          'fixed bottom-4 right-4 rounded-[50%] border border-white bg-black p-2',
        )}
        onClick={scrollToTop}
      >
        <ChevronUp color='#ffffff' />
      </button>
    )
  )
}
