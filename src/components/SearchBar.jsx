import { useState} from 'react'; //this is a hook - google what this is.
import { useNavigate } from 'react-router-dom'; //this is a hook too
import { Paper, IconButton } from '@mui/material'; //this is a component from material ui
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate(); //initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm(''); //reset searchTerm to empty string
    }
  }

  return (
    // Below, Paper is just a div with white background and looks elevated 
    <Paper
      component="form"
      onSubmit={handleSubmit} //this passes the searchTerm user inputs below to our url/query
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} //the 'e' sets a keypress event
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