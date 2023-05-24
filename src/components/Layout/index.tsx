import React, { FC, PropsWithChildren } from 'react';

import { Header } from '@components/Header';
import { NavBar } from '@components/NavBar';
import { Box } from '@mui/material';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          display: 'flex',
          overflow: 'hidden',
          maxWidth: 1440,
          margin: '0 auto',
          width: '100%',
          flex: 1,
        }}
      >
        <NavBar />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 24px',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
