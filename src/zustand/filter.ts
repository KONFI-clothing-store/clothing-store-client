import { create } from 'zustand';

type State = {
  price: {
    from: number;
    to: number;
  };
  size: string;
  isApplyFilter: boolean;
};

type Actions = {
  addPriceToFilter: (from: number, to: number) => void;
  addSizeToFilter: (size: string) => void;
  setApplyFilter: (isApplyFilter: boolean) => void;
};

export const useFilter = create<State & Actions>((set) => ({
  price: {
    from: 0,
    to: 0,
  },
  size: '',
  isApplyFilter: false,
  addPriceToFilter: (from: number, to: number) =>
    set({ price: { from, to }, isApplyFilter: false }),
  addSizeToFilter: (size: string) => set({ size, isApplyFilter: false }),
  setApplyFilter: (isApplyFilter: boolean) => set({ isApplyFilter }),
}));
