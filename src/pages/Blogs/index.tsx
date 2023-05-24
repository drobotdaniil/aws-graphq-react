import React from 'react';

import { Button } from '@components/Button';
import { Layout } from '@components/Layout';
import { Loader } from '@components/Loader';
import { Typography } from '@mui/material';

import { BlogList, BlogUpsert } from './components';
import { useBlogs } from './hooks';

export const Blogs = () => {
  const {
    blogs,
    isLoading,
    fetchBlogs,
    on,
    close,
    handleCreateClick,
    handleEditClick,
    modalContext,
  } = useBlogs();

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h2" component="h1" gutterBottom>
            Blog page
          </Typography>

          <Button onClick={handleCreateClick} sx={{ mb: 2 }}>
            Create todo
          </Button>

          <BlogList
            list={blogs}
            onDelete={fetchBlogs}
            onEdit={handleEditClick}
          />

          {on && (
            <BlogUpsert
              open={on}
              onClose={close}
              onConfirm={fetchBlogs}
              modalContext={modalContext}
            />
          )}
        </>
      )}
    </Layout>
  );
};
