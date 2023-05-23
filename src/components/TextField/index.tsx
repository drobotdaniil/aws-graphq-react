import React, { FC } from 'react';

import { Box, TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

export const TextField: FC<TextFieldProps> = ({
  type = 'text',
  name,
  label,
  ...props
}) => {
  return (
    <Box mb={3} display="flex" flexDirection="column">
      <label htmlFor={name}>{label}</label>

      <TextFieldMUI name={name} type={type} {...props} />
    </Box>
  );
};
