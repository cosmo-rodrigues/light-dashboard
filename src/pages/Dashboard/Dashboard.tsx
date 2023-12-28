import * as Material from '@mui/material';
import * as Components from '../../components';
import { NavBar } from '../../components/NavBar/NavBar';

export function Dashboard() {
  return (
    <>
      <NavBar />
      <Material.Box height={30} />
      <Material.Box sx={{ display: 'flex' }}>
        <Components.SideNav />
        <Material.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Dashboard</h1>
        </Material.Box>
      </Material.Box>
    </>
  );
}
