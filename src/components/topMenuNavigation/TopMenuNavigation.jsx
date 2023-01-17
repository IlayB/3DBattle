import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';
import { Whatshot, Inventory, Store } from '@mui/icons-material';
import ProfileIconButton from './components/ProfileIconButton';
import DrawerSideMenu from '../drawerSideMenu/DrawerSideMenu';

const pages = [
  { label: 'Inventory', path: '/inventory', icon: <Inventory /> },
  { label: 'Store', path: '/store', icon: <Store /> },
];

const TopMenuNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => handleNavigation('/')}
            display="row"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Whatshot color="error" />
            <Typography variant="h5">3D Battle</Typography>
          </Button>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <DrawerSideMenu pages={pages} />
          </Box>
          <Button
            onClick={() => handleNavigation('/')}
            display="row"
            sx={{
              display: { flexGrow: 1, xs: 'flex', md: 'none' },
              mr: 1,
            }}>
            <Whatshot color="error" />
            <Typography variant="h5">3D Battle</Typography>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.label} onClick={() => handleNavigation(page.path)}>
                <Typography>{page.label}</Typography>
              </Button>
            ))}
          </Box>
          <ProfileIconButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopMenuNavigation;
