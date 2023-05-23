import React, { FC, PropsWithChildren } from 'react';

import { Header } from '@components/Header';
import { Box } from '@mui/material';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />

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
