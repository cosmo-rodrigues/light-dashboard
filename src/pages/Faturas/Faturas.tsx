import * as Material from '@mui/material';
import * as Components from '../../components';
import { useListFaturas } from '../../store/useListFaturas';

export function Faturas() {
  const faturas = useListFaturas((state) => state.faturas);

  return (
    <>
      <Components.NavBar />
      <Material.Box height={50} />
      <Material.Box sx={{ display: 'flex' }}>
        <Components.SideNav />
        <Material.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Components.Fatura.List faturas={faturas} />
        </Material.Box>
      </Material.Box>
    </>
  );
}
