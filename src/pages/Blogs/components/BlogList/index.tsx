import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { Todo } from '@type/API';

import { Blog } from '../Blog';

export type Props = {
  list: Array<Todo | null>;
  onDelete: () => Promise<void>;
  onEdit: (id: string) => void;
};

export const BlogList: FC<Props> = React.memo(({ list, onDelete, onEdit }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
      }}
    >
      {list.length ? (
        list.map((item) =>
          item ? (
            <Blog {...item} key={item.id} onDelete={onDelete} onEdit={onEdit} />
          ) : null,
        )
      ) : (
        <Typography>Blog list is empty</Typography>
      )}
    </Box>
  );
});
