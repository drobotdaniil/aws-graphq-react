import React, { FC, PropsWithChildren, createContext, useContext } from 'react';

import { useSignUp } from './hooks';

const SignUpContext = createContext({} as ReturnType<typeof useSignUp>);

export const SignUpProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useSignUp();

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error('useSignUpContext: SignUpContext is not set');
  }

  return context;
};
