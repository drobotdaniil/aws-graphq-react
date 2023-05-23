import React, { FC } from 'react';

import { Modal } from '@components/Modal';
import { TextField } from '@components/TextField';
import { Box, LinearProgress, Typography } from '@mui/material';

import { getCopies } from './configs';
import { useBlogUpsert } from './hooks';

export enum ModalMode {
  Create,
  Edit,
}

export type ModalContext = { mode: ModalMode; id?: string };

export type Props = {
  open: boolean;
  modalContext: ModalContext;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

export const BlogUpsert: FC<Props> = ({
  open,
  modalContext,
  onClose,
  onConfirm,
}) => {
  const {
    handleConfirmModal,
    blog: { name, description },
    handleChangeInput,
    submitError,
    isSubmitDisabled,
    isInfoLoading,
    isMutationLoading,
  } = useBlogUpsert({ onConfirm, onClose, modalContext });

  const { title } = getCopies(modalContext.mode);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      onConfirm={handleConfirmModal}
      isSubmitDisabled={isSubmitDisabled}
    >
      <Box sx={{ width: 350 }}>
        <Box sx={{ height: 10 }}>
          {(isInfoLoading || isMutationLoading) && <LinearProgress />}
        </Box>

        <TextField
          value={name}
          onChange={handleChangeInput}
          name="name"
          label="Name"
          disabled={isInfoLoading}
          sx={{ bgcolor: isInfoLoading ? 'silver' : 'initial' }}
        />
        <TextField
          value={description}
          onChange={handleChangeInput}
          name="description"
          label="Description"
          disabled={isInfoLoading}
          sx={{ bgcolor: isInfoLoading ? 'silver' : 'initial' }}
        />

        <Typography color="red">{submitError}</Typography>
      </Box>
    </Modal>
  );
};
