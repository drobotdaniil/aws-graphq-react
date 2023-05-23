import { useMemo, useState } from 'react';

import { GraphQLQuery } from '@aws-amplify/api';
import { deleteTodo } from '@graphql/mutations';
import { DeleteTodoMutation } from '@type/API';
import { addHours } from '@utils/date';
import { API, graphqlOperation } from 'aws-amplify';

import { Props } from '.';

export const useBlog = ({ onDelete, createdAt, updatedAt }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteBlog = async (id: string) => {
    setIsLoading(true);

    try {
      await API.graphql<GraphQLQuery<DeleteTodoMutation>>(
        graphqlOperation(deleteTodo, { input: { id } }),
      );

      await onDelete();
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const isNewBlog = useMemo(
    () => addHours(new Date(createdAt), 2) > Date.now(),
    [createdAt],
  );

  const isEditedBlog = useMemo(
    () => createdAt !== updatedAt,
    [createdAt, updatedAt],
  );

  return {
    isLoading,
    handleDeleteBlog,
    isNewBlog,
    isEditedBlog,
  };
};
