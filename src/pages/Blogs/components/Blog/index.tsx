import React, { FC } from 'react';

import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import { Todo } from '@type/API';

import { useBlog } from './hooks';
import { Props as BlogListProps } from '../BlogList';

export type Props = Todo & Omit<BlogListProps, 'list'>;

export const Blog: FC<Props> = (props) => {
  const { name, id, description, onEdit, createdAt } = props;

  const { handleDeleteBlog, isLoading, isNewBlog, isEditedBlog, allowModify } =
    useBlog(props);

  return (
    <Card key={id} variant="outlined" sx={{ bgcolor: 'lightblue' }}>
      {allowModify && (
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <IconButton
            size="small"
            onClick={() => onEdit(id)}
            color="success"
            disabled={isLoading}
          >
            <EditOutlined />
          </IconButton>

          <IconButton
            onClick={() => handleDeleteBlog(id)}
            color="error"
            disabled={isLoading}
          >
            <DeleteOutlined />
          </IconButton>
        </CardActions>
      )}
      <CardContent>
        <Box display="flex">
          <Typography gutterBottom component="h3" variant="h4">
            {name}
          </Typography>

          {isNewBlog && (
            <Chip label="new" size="small" color="success" sx={{ ml: 1 }} />
          )}
        </Box>

        <Typography gutterBottom>{description}</Typography>

        <Typography>{new Date(createdAt).toLocaleString()}</Typography>
        {isEditedBlog && (
          <Typography variant="caption" color="green">
            (edited)
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
