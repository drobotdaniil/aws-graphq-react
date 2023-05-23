import React, { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { RouteConfig } from './types';

type Props = {
  config: RouteConfig[];
  defaultPath: string;
};

export const RoutesConfigurator: FC<Props> = ({ config, defaultPath }) => {
  return (
    <Routes>
      {config.map(({ path, Component }) => (
        <Route
          key={path}
          element={Component}
          index={path === defaultPath}
          path={path}
        />
      ))}

      <Route path="*" element={<Navigate to={defaultPath} replace />} />
    </Routes>
  );
};
