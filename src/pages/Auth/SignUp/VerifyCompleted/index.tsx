import React from 'react';

import { paths } from '@configs/path';
import { Box, Button, Typography } from '@mui/material';
import { useSignUpContext } from '@providers/SignUpProvider';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

export const VerificationCompleted = () => {
  const navigate = useNavigate();
  const { signUpValues } = useSignUpContext();

  const signIn = async () => {
    const { email, password } = signUpValues;

    try {
      await Auth.signIn(email, password);
    } catch (e) {
      navigate(paths.auth.signIn);
    }
  };

  return (
    <Box
      sx={{
        padding: '50px',
        width: '300px',
        border: 1,
        borderColor: 'silver',
        borderRadius: 5,
      }}
    >
      <Typography sx={{ mb: 2 }}>
        You have been successfully registered.{' '}
        <Typography color="blue" component="span" onClick={signIn}>
          Do you want to auto sign in?
        </Typography>
      </Typography>
      <Button variant="contained" onClick={() => navigate(paths.auth.signIn)}>
        Move to Login page
      </Button>
    </Box>
  );
};
