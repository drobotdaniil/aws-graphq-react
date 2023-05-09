import React, { FC } from 'react';

import { paths } from '@configs/path';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigate = styled('ul')`
  display: flex;

  li:first-child {
    margin: 0 10px;
  }
`;

export const NavBar: FC = () => {
  return (
    <nav>
      <Navigate>
        <li>
          <Link to={paths.home}>Home</Link>
        </li>
        <li>
          <Link to={paths.about}>About</Link>
        </li>
      </Navigate>
    </nav>
  );
};
