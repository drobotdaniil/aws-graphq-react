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
          padding: '10px 24px',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </>
  );
};
