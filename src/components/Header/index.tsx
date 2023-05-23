import React from 'react';

import { Button } from '@components/Button';
import { Logo } from '@components/Logo';
import { NavBar } from '@components/NavBar';
import { Box } from '@mui/material';

import { useHeader } from './hooks';

export const Header = () => {
  const { handleLogout, user } = useHeader();

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 24px',
        border: '1px solid silver',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
        <NavBar />
      </Box>

      <Box>
        <Box>User: {user?.getUsername()}</Box>
        <Button sx={{ ml: 'auto', display: 'flex' }} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};
