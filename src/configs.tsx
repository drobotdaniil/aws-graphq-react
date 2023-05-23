import React from 'react';

import { paths } from '@configs/path';
import { About } from '@pages/About';
import { Blogs } from '@pages/Blogs';

export const routesConfig = [
  {
    path: paths.blogs,
    Component: <Blogs />,
  },
  {
    path: paths.about,
    Component: <About />,
  },
];
