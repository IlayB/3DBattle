import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
} from '@mui/material';

import Authorisation from '../../../features/authorisation/Authorisation';
import { auth } from '../../../auth/firebaseApp';

const settings = [{ label: 'Profile', path: '/profile' }];

const ProfileIconButton = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState();
  const [authUser, setAuthUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleCloseUserMenu();
  };

  const onSingOut = () => {
    signOut(auth)
      .then((result) => {
        console.log('SIGNED OUT SUCCESS', result);
      })
      .catch((error) => {
        console.log('SIGNED OUT ERROR', error);
      });
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log('USER', user);
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      return () => listen();
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>

      {authUser ? (
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}>
          {settings.map((setting) => (
            <MenuItem key={setting.label} onClick={() => handleNavigation(setting.path)}>
              <Typography textAlign="center">{setting.label}</Typography>
            </MenuItem>
          ))}
          <Button fullWidth onClick={onSingOut}>
            Sing Out
          </Button>
        </Menu>
      ) : (
        <Authorisation
          id={1}
          open={Boolean(anchorElUser)}
          anchorEl={anchorElUser}
          onClose={handleCloseUserMenu}
        />
      )}
    </Box>
  );
};
export default ProfileIconButton;
