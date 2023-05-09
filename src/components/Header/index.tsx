import React, { FC } from 'react';

import { Logo } from '@components/Logo';
import { NavBar } from '@components/NavBar';
import { Box, Button } from '@mui/material';
import { CognitoUser } from 'amazon-cognito-identity-js';

import { useHeader } from './hooks';

type Props = {
  user: CognitoUser | null;
};

export const Header: FC<Props> = ({ user }) => {
  const { handleLogout } = useHeader();

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
