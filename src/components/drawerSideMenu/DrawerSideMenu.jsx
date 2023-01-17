import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const DrawerSideMenu = ({ pages }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <IconButton size="large" onClick={() => setIsDrawerOpen(!isDrawerOpen)} color="inherit">
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'left'} open={isDrawerOpen} onClose={() => setIsDrawerOpen(!isDrawerOpen)}>
        <Box
          role="presentation"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          onKeyDown={() => setIsDrawerOpen(!isDrawerOpen)}>
          <List>
            {pages.map((page) => (
              <ListItem disablePadding key={page.label}>
                <ListItemButton onClick={() => handleNavigation(page.path)}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default DrawerSideMenu;
