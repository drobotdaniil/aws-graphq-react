import React from 'react';

import { TextField } from '@components/TextField';
import { paths } from '@configs/path';
import { Button, Typography } from '@mui/material';
import { useSignUpContext } from '@providers/SignUpProvider';
import { useNavigate } from 'react-router-dom';

export const Base = () => {
  const {
    signUp,
    signUpValues: { email, password, name },
    setSignUpValues,
    submitError,
  } = useSignUpContext();

  const navigate = useNavigate();

  return (
    <form onSubmit={signUp}>
      <TextField
        name="name"
        value={name}
        onChange={setSignUpValues}
        label="Name"
      />

      <TextField
        name="email"
        type="email"
        value={email}
        onChange={setSignUpValues}
        label="Email"
      />

      <TextField
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={setSignUpValues}
      />

      <Button sx={{ marginBottom: 3 }} type="submit" variant="contained">
        Next
      </Button>

      <Typography
        onClick={() => navigate(paths.auth.signIn)}
        color="blue"
        sx={{ cursor: 'pointer' }}
      >
        Already have an account?
      </Typography>

      <Typography color="red">{submitError}</Typography>
    </form>
  );
};
