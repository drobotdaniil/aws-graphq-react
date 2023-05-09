import React, { FC } from 'react';

import { Box, TextField as TextFieldMUI } from '@mui/material';

type Props = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
};

export const TextField: FC<Props> = ({
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
