import { useCallback, useEffect, useState } from 'react';

import { GraphQLQuery } from '@aws-amplify/api';
import { createTodo, updateTodo } from '@graphql/mutations';
import { getTodo } from '@graphql/queries';
import { CreateTodoInput, CreateTodoMutation, GetTodoQuery } from '@type/API';
import { API, graphqlOperation } from 'aws-amplify';

import { ModalMode, Props } from '.';

export const useBlogUpsert = ({
  onConfirm,
  onClose,
  modalContext,
}: Omit<Props, 'open'>) => {
  const [blog, setBlog] = useState<CreateTodoInput>({
    name: '',
    description: '',
  });
  const [submitError, setSubmitError] = useState('');
  const [isInfoLoading, setIsInfoLoading] = useState(false);
  const [isMutationLoading, setIsMutationLoading] = useState(false);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setSubmitError('');
      setBlog({ ...blog, [name]: value });
    },
    [blog],
  );

  const handleConfirmModal = async () => {
    setIsMutationLoading(true);

    try {
      const query =
        modalContext.mode === ModalMode.Create ? createTodo : updateTodo;

      await API.graphql<GraphQLQuery<CreateTodoMutation>>(
        graphqlOperation(query, { input: blog }),
      );

      onClose();
      setBlog({ name: '', description: '' });

      await onConfirm();
    } catch (error) {
      setSubmitError('Sorry something went wrong...');
    } finally {
      setIsMutationLoading(false);
    }
  };

  const fetchBlogInfo = useCallback(async (id: string) => {
    setIsInfoLoading(true);

    try {
      const { data } = await API.graphql<GraphQLQuery<GetTodoQuery>>(
        graphqlOperation(getTodo, {
          id,
        }),
      );

      const item = data?.getTodo;

      if (item) {
        setBlog({
          name: item.name,
          id: item.id,
          description: item.description,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsInfoLoading(false);
    }
  }, []);

  useEffect(() => {
    if (modalContext.mode === ModalMode.Edit) {
      fetchBlogInfo(modalContext.id || '');
    }
  }, [fetchBlogInfo, modalContext]);

  return {
    handleChangeInput,
    blog,
    handleConfirmModal,
    submitError,
    isSubmitDisabled:
      isMutationLoading ||
      !!submitError ||
      isInfoLoading ||
      Object.values(blog).some((value) => !value?.trim().length),
    isMutationLoading,
    isInfoLoading,
  };
};
