import { Dispatch, SetStateAction } from 'react'

export const toggleMenuState = (
  menuState: boolean,
  setMenuState: Dispatch<SetStateAction<boolean>>,
) => {
  setMenuState((prevState: boolean) => !prevState)

  if (!menuState) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}
