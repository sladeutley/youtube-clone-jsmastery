// import React from 'react' //FOR SOME Reason, the teacher's code all has 'import React from 'react' on top of github jsx files, but it's not in there in the tutorial -> look into this
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

// const ChannelCard = ({ channelDetail }) => {
//   console.log(channelDetail)
//   return (
//     <div>ChannelCard</div>
//   )
// }

const ChannelCard = ({ channelDetail }) => (
// below got ride of marginTop bc he doesn't have it in tutorial (at least not yet 1:30 mark) but does in github code. 
// const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      // marginTop 
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          {/* {channelDetail?.snippet?.title} */}
          {/* Above, github has the empty string but he didn't have that in video - not sure what empty string is doing  */}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
          //Above, subscribers won't show up here bc we don't have access to the statistics object, but it will appear on the channel page
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard