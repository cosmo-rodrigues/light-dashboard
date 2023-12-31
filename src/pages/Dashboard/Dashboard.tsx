import * as Material from '@mui/material';

import { NavBar } from '../../components/NavBar/NavBar.tsx';
import { SideNav } from '../../components/SideNav/SideNav.tsx';
import { CarouselComponent } from '../../components/Carousel/Carousel.tsx';
import { useListFaturas } from '../../store/useListFaturas.ts';

export function Dashboard() {
  const faturas = useListFaturas((state) => state.faturas);
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ECEFF1',
        background:
          'linear-gradient(158deg, rgba(224, 224, 224) 0%, rgba(233, 237, 254) 100%',
      }}
    >
      <NavBar />
      <Material.Box height={50} />
      <Material.Box sx={{ display: 'flex' }}>
        <SideNav />
        <Material.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <CarouselComponent faturas={faturas} />
        </Material.Box>
      </Material.Box>
    </div>
  );
}
