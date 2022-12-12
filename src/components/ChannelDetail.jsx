import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./"; //adding this so can reuse these components that we have already created here (with making some minor adjustments) to make things easier 
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams(); //need channel id and this is how we get access to the channel id

  useEffect(() => { //going to render as soon as component opens
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => )
  }, [id]) //[id] makes it so this hook will render as well whenever the id changes

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail