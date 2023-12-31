import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IFatura } from '../dtos/faturas';

type Faturas = {
  faturas: IFatura[];
  setFaturas: (data: IFatura[] | undefined) => void;
};

const initialState = {
  faturas: [],
};

export const useListFaturas = create(
  persist<Faturas>(
    (set) => ({
      ...initialState,
      setFaturas: (data: IFatura[] | undefined) => set({ faturas: data }),
      reset: () => set(initialState),
    }),
    {
      name: 'faturas',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
