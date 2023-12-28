import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type NavBar = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useNavBarStore = create(
  persist<NavBar>(
    (set) => ({
      open: true,
      setOpen: (open: boolean) => set(() => ({ open })),
    }),
    {
      name: 'nav-bar',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
