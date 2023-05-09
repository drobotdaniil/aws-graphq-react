import React from 'react';

import { Box } from '@mui/material';
import { SignUpProvider, useSignUpContext } from '@providers/SignUpProvider';

import { signUpSteps } from './configs';

const StepComponent = () => {
  const { step } = useSignUpContext();

  const { Component } = signUpSteps[step];

  return (
    <Box>
      <Component />
    </Box>
  );
};

export const SignUp = () => (
  <SignUpProvider>
    <h1>Sign up</h1>
    <StepComponent />
  </SignUpProvider>
);
