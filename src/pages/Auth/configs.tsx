import React from 'react';

import { paths } from '@configs/path';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const routesConfig = {
  [paths.auth.signIn]: {
    Component: <SignIn />,
  },
  [paths.auth.signUp]: {
    Component: <SignUp />,
  },
};
