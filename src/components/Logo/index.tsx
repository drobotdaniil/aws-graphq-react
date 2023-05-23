import React from 'react';

import { Chip } from '@mui/material';

export const Logo = () => {
  return (
    <Chip
      sx={{ padding: 1, border: '1px solid silver', borderRadius: 5 }}
      label="aws-graphql-pet"
      color="primary"
    />
  );
};
