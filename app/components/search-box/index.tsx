'use client'

import { Box, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import  React, { useRef, SyntheticEvent } from 'react';

export const SearchBox = ({ onSearch, isError, isSuccess }: {onSearch: (location: string) => Promise<void>, isError: boolean, isSuccess: boolean}) => {
  const locationString = useRef<HTMLInputElement | null>(null);

  const handleSearch = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (locationString.current && locationString.current.value) {
      onSearch(locationString.current.value);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        paddingTop: '1em',
        display: 'flex',
        maxWidth: '100%',
      }}
      onSubmit={handleSearch}
    >
      <TextField
        inputRef={locationString}
        fullWidth
        error={isError}
        color={isSuccess ? 'success' : undefined}
        label="Search Location For Current Weather"
        id="searchLocation"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
