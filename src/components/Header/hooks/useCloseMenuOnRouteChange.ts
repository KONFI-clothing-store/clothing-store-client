import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useCloseMenuOnRouteChange = (
  setIsActiveMenu: (param: boolean) => void,
) => {
  const location = useLocation()

  useEffect(() => {
    setIsActiveMenu(false)
  }, [location])
}
