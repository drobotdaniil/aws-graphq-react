import React from 'react';

import { Logo } from '@components/Logo';
import { Logout } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

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
      <Logo />

      <Box>
        <Typography sx={{ mr: 2, fontWeight: 'bold' }} variant="overline">
          {user?.attributes.name}
        </Typography>
        <IconButton onClick={handleLogout}>
          <Logout />
        </IconButton>
      </Box>
    </Box>
  );
};
