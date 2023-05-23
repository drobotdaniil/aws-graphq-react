import { ModalMode } from '.';

const editCopies = {
  title: 'Edit blog dialog',
};

const createCopies = {
  title: 'Create blog dialog',
};

export const getCopies = (mode: ModalMode) =>
  ({ [ModalMode.Create]: createCopies, [ModalMode.Edit]: editCopies }[mode]);
