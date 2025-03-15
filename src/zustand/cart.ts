import { create } from 'zustand'

export type ClothesCardType = {
  id: number
  name: string
  size: string
  price: number
  img_url: string
  quantity: number
  totalSumOfItem: number
}

type State = {
  clothesCards: ClothesCardType[]
  totalSum: number
}

type Actions = {
  addItemToCart: (
    name: string,
    size: string,
    price: number,
    img_url: string,
    quantity: number,
    id: number,
  ) => void
  updateItemInCart: (size: string, addQuantity: number, id: number) => void
  deleteItemFromCart: (id: number, size: string) => void
  calculationOfTotalSum: () => void
  clearAllCart: () => void
}

export const useCart = create<State & Actions>((set) => ({
  clothesCards: [],
  totalSum: 0,
  addItemToCart: (
    name: string,
    size: string,
    price: number,
    img_url: string,
    quantity: number,
    id: number,
  ) =>
    set((state) => {
      const indexOfElement = state.clothesCards.findIndex(
        (item) => item.id === id && item.size === size,
      )

      if (indexOfElement > -1) {
        const updateClothesCards = state.clothesCards.map((item) => {
          return item.id === id && item.size === size
            ? {
                ...item,
                quantity:
                  state.clothesCards[indexOfElement].quantity + quantity,
                totalSumOfItem: item.quantity * item.price,
              }
            : item
        })

        return {
          totalSum: state.totalSum + quantity * price,
          clothesCards: updateClothesCards,
        }
      }

      return {
        totalSum: state.totalSum + quantity * price,
        clothesCards: [
          ...state.clothesCards,
          {
            name,
            size,
            price,
            img_url,
            quantity,
            id,
            totalSumOfItem: quantity * price,
          },
        ],
      }
    }),
  updateItemInCart: (size: string, quantity: number, id: number) =>
    set((state) => {
      const updateClothesCards = state.clothesCards.map((item) => {
        return item.id === id && item.size === size
          ? {
              ...item,
              quantity,
              totalSumOfItem: item.quantity * item.price,
            }
          : item
      })

      const indexOfElement = state.clothesCards.findIndex(
        (el) => el.id === id && el.size === size,
      )

      const differenceBetweenQuantities =
        quantity - state.clothesCards[indexOfElement].quantity

      const newTotalSum =
        differenceBetweenQuantities > 0
          ? state.totalSum + Number(state.clothesCards[indexOfElement].price)
          : state.totalSum - state.clothesCards[indexOfElement].price

      return {
        totalSum: newTotalSum,
        clothesCards: updateClothesCards,
      }
    }),
  deleteItemFromCart: (id: number, size: string) =>
    set((state) => {
      const newCards = state.clothesCards.filter((item) => {
        return item.id !== id || item.size !== size
      })
      console.log('newCards:', newCards)

      const newTotalSum = newCards.reduce(
        (acc, card) => acc + Number(card.price),
        0,
      )
      console.log(newTotalSum)

      return {
        totalSum: newTotalSum,
        clothesCards: [...newCards],
      }
    }),

  calculationOfTotalSum: () =>
    set((state) => {
      const totalSum = state.clothesCards.reduce(
        (prevValue, cardCur) =>
          prevValue + cardCur.totalSumOfItem * cardCur.quantity,
        0,
      )
      return {
        totalSum,
      }
    }),
  clearAllCart: () =>
    set({
      clothesCards: [],
      totalSum: 0,
    }),
}))
