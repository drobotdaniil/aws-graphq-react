import React from 'react';

import { RoutesConfigurator } from '@components/RoutesConfigurator';
import { paths } from '@configs/path';
import { Box } from '@mui/material';

import { routesConfig } from './configs';

export const Auth = () => {
  return (
    <Box
      component="main"
      sx={{
        m: 0,
        p: 0,
        display: 'grid',
        placeContent: 'center',
        minHeight: '100vh',

        form: {
          height: '400px',
          padding: '50px',
          width: '300px',
          borderRadius: '5px',
          border: '1px solid silver',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <RoutesConfigurator
        config={routesConfig}
        defaultPath={paths.auth.signIn}
      />
    </Box>
  );
};
