import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Inventory from '../../features/inventory/Inventory';
import Shopping from '../../features/shopping/Shopping';
import Profile from '../../features/profile/Profile';
import Home from '../../features/home/Home';
import TestModal from '../../components/testModal/TestModal';

export const AppRoutes = () => {
  return (
    <Box sx={{ display: 'flex', position: 'absolute' }}>
      <Routes>
        <Route path={`/error`} component={<TestModal />} />
        <Route exact path={'/'} title={'Home'} element={<Home />} />
        <Route exact path={'/profile'} title={'Profile'} element={<Profile />} />
        <Route exact path={'/inventory'} title={'Inventory'} element={<Inventory />} />
        <Route exact path={'/store'} title={'Store'} element={<Shopping />} />
      </Routes>
    </Box>
  );
};
