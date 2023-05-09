import React, { useMemo } from 'react';

import { Loader } from '@components/Loader';
import { paths } from '@configs/path';
import { About } from '@pages/About';
import { Auth } from '@pages/Auth';
import { Home } from '@pages/Home';
import { useAuthContext } from '@providers/AuthProvider';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Root: React.FC = () => {
  const { user, isLoading } = useAuthContext();

  const rootComponent = useMemo(() => {
    if (isLoading) return <Loader />;

    if (!user) return <Navigate to={paths.auth.base} replace />;

    return (
      <Routes>
        <Route path={paths.home} index element={<Home />} />
        <Route path={paths.about} element={<About />} />

        <Route path="*" element={<Navigate to={paths.home} replace />} />
      </Routes>
    );
  }, [isLoading, user]);

  return (
    <Routes>
      {!user && !isLoading && (
        <Route path={paths.auth.base} element={<Auth />} />
      )}

      <Route path="/*" element={rootComponent} />
    </Routes>
  );
};
