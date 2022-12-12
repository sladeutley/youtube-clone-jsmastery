import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./"; //adding this so can reuse these components that we have already created here (with making some minor adjustments) to make things easier 
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null); //sets channel detail. At start set to null - don't know why
  const [videos, setVideos] = useState([]) // don't know why we set to empty array at start instead of null

  const { id } = useParams(); //need channel id and this is how we get access to the channel id

  console.log(channelDetail, videos);

  useEffect(() => { //going to render as soon as component opens
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0])); //this reads as setChannelDetail which is equal to data?.items[0]
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items)); //this reads as setVideos which is equal to data?.items
  }, [id]) //[id] makes it so this hook will render as well whenever the id changes

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail