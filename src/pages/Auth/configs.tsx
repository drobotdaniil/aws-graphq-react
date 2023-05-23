import React from 'react';

import { paths } from '@configs/path';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const routesConfig = [
  {
    path: paths.auth.signIn,
    Component: <SignIn />,
  },
  {
    path: paths.auth.signUp,
    Component: <SignUp />,
  },
];
