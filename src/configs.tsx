import React from 'react';

import { paths } from '@configs/path';
import { About } from '@pages/About';
import { Blogs } from '@pages/Blogs';

export const routesConfig = {
  [paths.blogs]: {
    title: 'Blogs',
    Component: <Blogs />,
  },
  [paths.about]: {
    title: 'About',
    Component: <About />,
  },
};
