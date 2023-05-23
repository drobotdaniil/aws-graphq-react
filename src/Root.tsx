import React, { useMemo } from 'react';

import { Loader } from '@components/Loader';
import { RoutesConfigurator } from '@components/RoutesConfigurator';
import { paths } from '@configs/path';
import { Auth } from '@pages/Auth';
import { useAuthContext } from '@providers/AuthProvider';
import { Navigate, Route, Routes } from 'react-router-dom';

import { routesConfig } from './configs';

export const Root: React.FC = () => {
  const { user, isLoading } = useAuthContext();

  const rootComponent = useMemo(() => {
    if (isLoading) return <Loader />;

    if (!user) return <Navigate to="*" replace />;

    return (
      <RoutesConfigurator config={routesConfig} defaultPath={paths.blogs} />
    );
  }, [isLoading, user]);

  return (
    <Routes>
      {!user && !isLoading && <Route path="*" element={<Auth />} />}

      <Route path="*" element={rootComponent} />
    </Routes>
  );
};
