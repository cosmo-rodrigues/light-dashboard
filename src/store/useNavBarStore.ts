import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type NavBar = {
  open: boolean;
  userNumber: string;
  setOpen: (open: boolean) => void;
  setUserNumber: (userNumber: string) => void;
};

const initialState = {
  open: true,
  userNumber: '',
};

export const useNavBarStore = create(
  persist<NavBar>(
    (set) => ({
      ...initialState,
      setOpen: (open: boolean) => set(() => ({ open })),
      setUserNumber: (userNumber: string) => set(() => ({ userNumber })),
    }),
    {
      name: 'nav-bar',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
