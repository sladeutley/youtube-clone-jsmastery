import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'f160caff59msh591ba284faf6842p1f91ddjsn9933c1653a96',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};