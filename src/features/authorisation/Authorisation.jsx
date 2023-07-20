import React, { useState } from 'react';
import { Box, Popover, Button } from '@mui/material';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Authorisation = ({ open, id, anchorEl, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
      <Box display="flex" flexDirection="column" p={2}>
        <Box display="flex" flexDirection="row" justifyContent="space-between" pb={2}>
          <Button fullWidth onClick={() => setIsSignIn(true)} disabled={isSignIn} color="error">
            Sing In
          </Button>
          <Button fullWidth onClick={() => setIsSignIn(false)} disabled={!isSignIn} color="error">
            Sing Up
          </Button>
        </Box>
        {isSignIn ? <SignIn /> : <SignUp />}
      </Box>
    </Popover>
  );
};

export default Authorisation;
