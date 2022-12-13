import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'; //this is a dependency that allows us to play our video
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Video } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const VideoDetail = () => {
  return (
    <div>VideoDetail</div>
  )
}

export default VideoDetail