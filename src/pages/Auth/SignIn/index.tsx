import React from 'react';

import { Button } from '@components/Button';
import { Loader } from '@components/Loader';
import { TextField } from '@components/TextField';
import { Typography } from '@mui/material';

import { useSignIn } from './hooks';

export const SignIn = () => {
  const {
    signInValues: { email, password },
    handleChangeInput,
    handleSubmit,
    handleCreateAccount,
    submitError,
    isSubmitDisabled,
    isLoading,
  } = useSignIn();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          type="email"
          value={email}
          onChange={handleChangeInput}
          label="Email"
        />

        <TextField
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleChangeInput}
        />

        <Button
          sx={{ marginBottom: 3 }}
          type="submit"
          variant="contained"
          disabled={isSubmitDisabled}
        >
          Sign In
        </Button>

        <Typography
          onClick={handleCreateAccount}
          color="blue"
          sx={{ cursor: 'pointer' }}
        >
          Create an account?
        </Typography>

        <Typography color="red">{submitError}</Typography>
      </form>
    </>
  );
};
