import { create } from 'zustand'

export type ClothesCardType = {
  name: string
  size: string
  price: string
  img_url: string
  quantity: number
}

type State = {
  clothesCards: ClothesCardType[]
}

type Actions = {
  addItemToCart: (
    name: string,
    size: string,
    price: string,
    img_url: string,
    quantity: number,
  ) => void
}

export const useCart = create<State & Actions>((set) => ({
  clothesCards: [
    {
      img_url: 'vertical-striped-shirt.jpg',
      name: 'Vertical Striped Shirt',
      price: '212.00',
      quantity: 1,
      size: 'X-Medium',
    },
    {
      img_url: 'checkered-shirt.jpg',
      name: 'Checkered shirt',
      price: '180.00',
      quantity: 1,
      size: 'Large',
    },
    {
      img_url: 'faded-skinny-jeans.jpg',
      name: 'Faded skinny Jeanst',
      price: '210.00',
      quantity: 1,
      size: 'Small',
    },
  ],
  addItemToCart: (
    name: string,
    size: string,
    price: string,
    img_url: string,
    quantity: number,
  ) =>
    set((state) => {
      const existingElement = state.clothesCards.findIndex(
        (card) => card.name === name,
      )

      if (existingElement > -1) {
        const sameSize = state.clothesCards[existingElement].size === size

        if (sameSize) {
          const newQantity =
            state.clothesCards[existingElement].quantity + quantity

          state.clothesCards[existingElement].quantity = newQantity

          return {
            clothesCards: [...state.clothesCards],
          }
        }
      }

      return {
        clothesCards: [
          ...state.clothesCards,
          { name, size, price, img_url, quantity },
        ],
      }
    }),
}))
