import React, { FC } from 'react';

import { Box, List, ListItem, Typography } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';

import { routesConfig } from '../../configs';

export const NavBar: FC = () => {
  const match = useMatch({ path: '/:page', end: false });

  const matchedPage = match?.params?.page || '';
  const activeTab = `/${matchedPage}`;

  return (
    <Box
      component="aside"
      sx={{ width: '100%', maxWidth: 280, bgcolor: 'lightblue' }}
    >
      <nav>
        <List>
          {Object.keys(routesConfig).map((path) => {
            const { title } = routesConfig[path];
            return (
              <ListItem
                key={path}
                sx={{
                  bgcolor: activeTab === path ? 'silver' : 'none',
                }}
              >
                <Link to={path}>
                  <Typography>{title}</Typography>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};
