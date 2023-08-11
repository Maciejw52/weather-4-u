import React from 'react'
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { RecentlySearchedProps } from '@/app/app.interface';

const RecentlySearched = ({ recentSearches, onSearch }: RecentlySearchedProps) => {
  return (
    <div className="ml-4">
      <Typography variant="h6" className="mb-2">Recently Searched Places</Typography>
      <List>
        {recentSearches.map((search, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={() => onSearch(search)}>
              <ListItemText primary={search} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecentlySearched