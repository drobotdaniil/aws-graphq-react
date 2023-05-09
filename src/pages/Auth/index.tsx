import React from 'react';

import { paths } from '@configs/path';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const Main = styled('main')`
  margin: 0;
  padding: 0;
  display: grid;
  place-content: center;
  min-height: 100vh;

  form {
    height: 400px;
    padding: 50px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid silver;
    display: flex;
    flex-direction: column;
  }
`;

export const Auth = () => {
  return (
    <Main>
      <Routes>
        <Route path={paths.auth.signIn} element={<SignIn />} />
        <Route path={paths.auth.signUp} element={<SignUp />} />

        <Route
          path="/*"
          element={<Navigate to={paths.auth.signIn} replace />}
        />
      </Routes>
    </Main>
  );
};
