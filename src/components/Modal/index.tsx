import React, { FC, PropsWithChildren } from 'react';

import { Button } from '@components/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

type Props = {
  open: boolean;
  title: string;
  onClose?: () => void;
  onConfirm?: () => void;
  isSubmitDisabled?: boolean;
} & PropsWithChildren;

export const Modal: FC<Props> = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
  isSubmitDisabled,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      {children && <DialogContent>{children}</DialogContent>}

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {onConfirm && (
          <Button onClick={onConfirm} disabled={isSubmitDisabled}>
            Save
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
