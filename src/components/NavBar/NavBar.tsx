import * as React from 'react';

import * as Material from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import * as Styles from './styles';
import { useNavBarStore } from '../../store/navBarStore';

export function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const { open, setOpen } = useNavBarStore((state) => state);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Material.Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Material.MenuItem onClick={handleMenuClose}>
        Meu perfil
      </Material.MenuItem>
      <Material.MenuItem onClick={handleMenuClose}>
        Minha conta
      </Material.MenuItem>
    </Material.Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Material.Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Material.MenuItem>
        <Material.IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Material.Badge badgeContent={4} color="error">
            <MailIcon />
          </Material.Badge>
        </Material.IconButton>
        <p>Messages</p>
      </Material.MenuItem>
      <Material.MenuItem>
        <Material.IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Material.Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Material.Badge>
        </Material.IconButton>
        <p>Notifications</p>
      </Material.MenuItem>
      <Material.MenuItem onClick={handleProfileMenuOpen}>
        <Material.IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </Material.IconButton>
        <p>Profile</p>
      </Material.MenuItem>
    </Material.Menu>
  );

  return (
    <Material.Box sx={{ flexGrow: 1 }}>
      <Styles.AppBar position="fixed" elevation={0}>
        <Material.Toolbar>
          <Material.IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </Material.IconButton>
          <Material.Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            LUMI
          </Material.Typography>
          <Styles.Search>
            <Styles.SearchIconWrapper>
              <SearchIcon />
            </Styles.SearchIconWrapper>
            <Styles.StyledInputBase
              placeholder="Pesquisar cliente..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Styles.Search>
          <Material.Box sx={{ flexGrow: 1 }} />
          <Material.Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Material.IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Material.Badge badgeContent={4} color="error">
                <MailIcon />
              </Material.Badge>
            </Material.IconButton>
            <Material.IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Material.Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Material.Badge>
            </Material.IconButton>
            <Material.IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </Material.IconButton>
          </Material.Box>
          <Material.Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Material.IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </Material.IconButton>
          </Material.Box>
        </Material.Toolbar>
      </Styles.AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Material.Box>
  );
}
