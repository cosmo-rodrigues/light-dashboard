import * as Material from '@mui/material';
import * as Components from '../../components';

export function Faturas() {
  return (
    <>
      <Material.Box sx={{ display: 'flex' }}>
        <Components.Sidenav />
        <Material.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Faturas</h1>
        </Material.Box>
      </Material.Box>
    </>
  );
}
