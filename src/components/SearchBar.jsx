import { useState} from 'react'; //this is a hook - google what this is.
import { useNavigate } from 'react-router-dom'; //this is a hook too
import { Paper, IconButton } from '@mui/material'; //this is a component from material ui
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    // Below, Paper is just a div with white background and looks elevated 
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input 
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton 
        type="submit" 
        sx={{ 
          p: '10px', 
          color: 'red' 
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar