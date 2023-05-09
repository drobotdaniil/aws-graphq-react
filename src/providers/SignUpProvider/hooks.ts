import { useCallback, useMemo, useState } from 'react';

import { SignUpStep } from '@type/auth';
import { Auth } from 'aws-amplify';

export const useSignUp = () => {
  const [step, setStep] = useState(SignUpStep.BaseStep);

  const [signUpValues, setValues] = useState({
    email: '',
    password: '',
    code: '',
    name: '',
  });

  const [submitError, setSubmitError] = useState('');

  const setSignUpValues = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      setValues({ ...signUpValues, [name]: value });
    },
    [signUpValues],
  );

  const goNext = useCallback(() => {
    setStep((prevStep) => prevStep + 1);
  }, []);

  const signUp = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();
      setSubmitError('');

      try {
        await Auth.signUp({
          username: signUpValues.email.toLowerCase(),
          password: signUpValues.password,
          attributes: {
            email: signUpValues.email.toLowerCase(),
            name: signUpValues.name,
          },
        });

        goNext();
      } catch (e) {
        const error = e as Error;

        setSubmitError(error?.message);
      }
    },
    [signUpValues, goNext],
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
        goNext();
      } catch (e) {
        const error = e as Error;

        setSubmitError(error?.message);
      }
    },
    [signUpValues, goNext],
  );

  const value = useMemo(
    () => ({
      step,
      submitError,
      signUpValues,
      setSignUpValues,
      signUp,
      verify,
    }),
    [setSignUpValues, signUpValues, signUp, step, verify, submitError],
  );

  return value;
};
