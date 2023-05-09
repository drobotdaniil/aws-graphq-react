import React from 'react';

import { TextField } from '@components/TextField';
import { Button, Typography } from '@mui/material';
import { useSignUpContext } from '@providers/SignUpProvider';
import { Auth } from 'aws-amplify';

export const Verify = () => {
  const { verify, setSignUpValues, signUpValues, submitError } =
    useSignUpContext();

  const handleResendCode = () => {
    Auth.resendSignUp(signUpValues.email.toLowerCase());
  };

  return (
    <form onSubmit={verify}>
      <TextField
        label="Verification code"
        name="code"
        value={signUpValues.code}
        onChange={setSignUpValues}
      />

      <Typography onClick={handleResendCode} color="blue" sx={{ mb: 2 }}>
        Re-send code?
      </Typography>

      <Button type="submit" variant="contained">
        Send code
      </Button>

      <Typography color="red">{submitError}</Typography>
    </form>
  );
};
