import { useCallback, useEffect, useState } from 'react';

import { GraphQLQuery } from '@aws-amplify/api';
import { listTodos } from '@graphql/queries';
import { useToggle } from '@hooks/useToggle';
import { ListTodosQuery, Todo } from '@type/API';
import { API, graphqlOperation } from 'aws-amplify';

import { ModalMode } from './components/BlogUpsert';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Array<Todo | null> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { on, open, close } = useToggle();
  const [modalContext, setModalContext] = useState<{
    mode: ModalMode;
    id?: string;
  }>({
    mode: ModalMode.Create,
  });

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await API.graphql<GraphQLQuery<ListTodosQuery>>(
        graphqlOperation(listTodos, {}),
      );

      setBlogs(data?.listTodos ? data?.listTodos.items : []);
    } catch (error) {
      console.error(error);

      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleEditClick = useCallback(
    (id: string) => {
      setModalContext({ mode: ModalMode.Edit, id });
      open();
    },
    [open],
  );

  const handleCreateClick = useCallback(() => {
    setModalContext({ mode: ModalMode.Create, id: '' });
    open();
  }, [open]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return {
    blogs: blogs || [],
    isLoading,
    handleEditClick,
    handleCreateClick,
    on,
    close,
    fetchBlogs,
    modalContext,
  };
};
