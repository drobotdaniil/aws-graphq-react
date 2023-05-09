import { useState } from 'react';

import { paths } from '@configs/path';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

export const useSignIn = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [signInValues, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues({ ...signInValues, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    setSubmitError('');
    setIsLoading(true);

    const { email, password } = signInValues;

    try {
      await Auth.signIn(email, password);
    } catch (e) {
      const error = e as Error;

      setSubmitError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigate(paths.auth.signUp);
  };

  return {
    signInValues,
    handleSubmit,
    handleChangeInput,
    handleCreateAccount,
    submitError,
    isSubmitDisabled: isLoading,
    isLoading,
  };
};
