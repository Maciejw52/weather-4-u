'use client'

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export const HeaderBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Link href='/'>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Weather4U
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
