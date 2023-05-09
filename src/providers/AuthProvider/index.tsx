import React, { FC, PropsWithChildren, createContext, useContext } from 'react';

import { useAuth } from './hooks';

const AuthContext = createContext({} as ReturnType<typeof useAuth>);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext: AuthContext is not set');
  }

  return context;
};
