import { Link } from 'react-router-dom'; //neeed this bc once click on card, need to navigate to video detail of that card
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"; //this is going to be used to populate card if we cannot fetch for whatever reason

// const VideoCard = ({ video }) => {
//   console.log(video)
//   return (
//     <div>VideoCard</div>
//   )
// }

const VideoCard = ({ video: { id: { videoId }, snippet } }) => ( //passing video prop (from Videos.jsx) -> destructure videoId and snippet). Uncomment out simple console log function above to see what the video prop object looks like and why we're destructuring it this way. pretty much tthe object has id object and snippet object within it. We only need the videoId within the id object but also we need the whole snippet object, which is why we destructured it this way
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    {/* Below, this is just saying if clicked on, if videoId exists, take me to that video, else take me to the dummy data (I think I could have done 'demoVideoUrl' instead of `/video/cV2gBU6hKfY` like i've done if click on title) */}
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      {/* Below, the '?' just keeps it from coming back undefined. It's pretty much just for image give me from snippet object snippet.thumbnails.high.url */}
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard