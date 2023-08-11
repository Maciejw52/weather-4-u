'use client'

import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const HeaderBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            sx={{ flexGrow: 1, display: { sm: 'block', flex: '1', textAlign: 'center' } }}
          >
            Weather4U
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderBar