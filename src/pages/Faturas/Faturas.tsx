import * as Material from '@mui/material';
import { useListFaturas } from '../../store/useListFaturas';
import { NavBar } from '../../components/NavBar/NavBar';
import { SideNav } from '../../components/SideNav/SideNav.tsx';
import { List } from '../../components/Fatura';
import { ListSkeleton } from '../../components/Fatura/ListSkeleton.tsx';

export function Faturas() {
  const faturas = useListFaturas((state) => state.faturas);

  return (
    <>
      <NavBar />
      <Material.Box height={50} />
      <Material.Box sx={{ display: 'flex' }}>
        <SideNav />
        <Material.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {faturas.length > 0 ? <List faturas={faturas} /> : <ListSkeleton />}
        </Material.Box>
      </Material.Box>
    </>
  );
}
