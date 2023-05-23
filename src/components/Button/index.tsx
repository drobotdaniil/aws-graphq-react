import React, { FC, PropsWithChildren } from 'react';

import { Button as ButtonMUI, ButtonProps } from '@mui/material';

export const Button: FC<ButtonProps & PropsWithChildren> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonMUI variant="contained" color="primary" {...rest}>
      {children}
    </ButtonMUI>
  );
};
