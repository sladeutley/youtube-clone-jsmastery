import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';
// import { Sidebar, Videos } from './components'; // This is same as above, but don't have to put "from './Components'" bc we're already in Components folder

// Fetching videos - go to https://rapidapi.com/ytdlfree/api/youtube-v31/ -> click 'Subscribe to Test' button, sign up for free plan, then go back to 'Endpoints' tab -> click on 'GET Suggested Videos' on left of screen, copy options object on right of screen (starts with 'const options') then create 'fetchFromAPI.js' within 'utils' folder, and in that file import axios like i've done in the code, and past the options object.

const Feed = () => { //not sure why we keep curly braces here and don't do a direct return?

  const [selectedCategory, setSelectedCategory] = useState('New'); //at start it's set to new
  
  // to use this function, we'll implement useEffect, which is a lifecycle hook that gets called when component initially loads (which is what we want - want videos to load on this page). Also, have to provide a dependency array which for now we'll leave empty (meaning code within this function will only load when we reload the page) 

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`) //q is query
  }, [selectedCategory]); //since we're using 'selectedCategory' within useEffect, we also need to add it to the dependency array here. This means it's going to call this function every time we change the category.
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
      {/* Above, flex direction means usually lets have it as a column, but on medium devices like phones, lets do it as a row */}
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2} }}>
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>
          Copyright 2022 U&G Holdings
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white' }}>
          New <span style={{ color: '#F31503'}}>videos</span>
        </Typography>

        Below, passing a videos prop into the Videos. Can only pass an empty array at this point bc we don't have videos. so next step is to fetch the data to be able to show the videos.
        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed