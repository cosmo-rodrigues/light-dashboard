import * as Material from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LineAxisRoundedIcon from '@mui/icons-material/LineAxisRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';

import * as Styles from './styles';
import { useNavBarStore } from '../../store/navBarStore';

export function SideNav() {
  const { open } = useNavBarStore((state) => state);
  const navigate = useNavigate();

  return (
    <Material.Box sx={{ display: 'flex' }}>
      <Material.CssBaseline />
      <Material.Box height={30} />
      <Styles.Drawer variant="permanent" open={open} elevation={0}>
        <Styles.DrawerHeader>
          <Material.IconButton>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </Material.IconButton>
        </Styles.DrawerHeader>
        <Material.List>
          <Material.ListItem
            onClick={() => navigate('/dashboard')}
            disablePadding
            sx={{ display: 'block' }}
          >
            <Material.ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <Material.ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LineAxisRoundedIcon
                  style={{
                    color: '#FFFFFF',
                  }}
                />
              </Material.ListItemIcon>
              <Material.ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0, color: '#FFFFFF' }}
              />
            </Material.ListItemButton>
          </Material.ListItem>
          <Material.ListItem
            onClick={() => navigate('/faturas')}
            disablePadding
            sx={{ display: 'block' }}
          >
            <Material.ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <Material.ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DescriptionRoundedIcon
                  style={{
                    color: '#FFFFFF',
                  }}
                />
              </Material.ListItemIcon>
              <Material.ListItemText
                primary="Faturas"
                sx={{ opacity: open ? 1 : 0, color: '#FFFFFF' }}
              />
            </Material.ListItemButton>
          </Material.ListItem>
        </Material.List>
      </Styles.Drawer>
    </Material.Box>
  );
}
