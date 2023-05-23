import React, { FC, PropsWithChildren } from 'react';

import { Header } from '@components/Header';
import { Box } from '@mui/material';
import { useAuthContext } from '@providers/AuthProvider';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();

  return (
    <>
      <Header user={user} />

      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 24px',
          overflow: 'hidden',
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        {children}
      </Box>
    </>
  );
};
