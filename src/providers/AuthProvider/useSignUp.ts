import { useCallback, useMemo, useState } from 'react';

import { Auth } from 'aws-amplify';

export const useSignUp = () => {
  const [signUpValues, setValues] = useState({
    email: '',
    password: '',
    code: '',
  });

  const [submitError, setSubmitError] = useState('');

  const setSignUpValues = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      setValues({ ...signUpValues, [name]: value });
    },
    [signUpValues],
  );

  const signUp = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();
      setSubmitError('');

      try {
        await Auth.signUp({
          username: signUpValues.email.toLowerCase(),
          password: signUpValues.password,
        });
      } catch (e) {
        const error = e as Error;

        setSubmitError(error?.message);
      }
    },
    [signUpValues],
  );

  const verify = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();
      setSubmitError('');

      try {
        await Auth.confirmSignUp(
          signUpValues.email.toLowerCase(),
          signUpValues.code,
        );
      } catch (e) {
        const error = e as Error;

        setSubmitError(error?.message);
      }
    },
    [signUpValues],
  );

  const value = useMemo(
    () => ({
      submitError,
      signUpValues,
      setSignUpValues,
      signUp,
      verify,
    }),
    [setSignUpValues, signUpValues, signUp, verify, submitError],
  );

  return value;
};
