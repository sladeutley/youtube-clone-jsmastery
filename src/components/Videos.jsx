import { Stack, Box } from '@mui/material';
//1:03:00 - *Also, at some point I will have to update commits including apiKey and put .env in gitignore, or maybe get another one for when do real project bc who cares
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => { //have to pass videos as prop
  // console.log(videos);
  if (!videos?.length) return 'Loading...';

  return (
    // <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
    // Below, after passing in direction prop, now we wanna say if there is a specific direction passed in, use that, if not, use row 
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        //Above and below, idx is index
        <Box key={idx}> 
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {/* Needed to do video and channel detail above bc sometimes we get video and sometimes we get channel. This is is saying, if data comes back video id, show video (by passing video prop), and if it comes back channel id, then show channel  */}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos