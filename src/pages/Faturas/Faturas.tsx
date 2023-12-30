import * as Material from '@mui/material';
import * as Components from '../../components';

export function Faturas() {
  return (
    <>
      <Components.NavBar />
      <Material.Box height={50} />
      <Material.Box sx={{ display: 'flex' }}>
        <Components.SideNav />
        <Material.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Components.Fatura.List />
        </Material.Box>
      </Material.Box>
    </>
  );
}
