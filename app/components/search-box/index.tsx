'use client'

import { Box, TextField, Button, Typography  } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import  React, { useRef, SyntheticEvent } from 'react';
import { SearchBoxProps } from '@/app/app.interface';

const SearchBox = ({ onSearch, isError, isSuccess }: SearchBoxProps) => {
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
        padding: '2em',
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
      <Button type="submit" sx={{ marginLeft: '1em' }}>
       <Typography>Search</Typography> 
      </Button>
    </Box>
  );
};

export default SearchBox