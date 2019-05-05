import axios from 'axios';

const KEY = 'AIzaSyAg9k-2cP9vYwqffdbXEIG76P3fOnnIzNY';

const axiosClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});

export const searchYoutubeVideos = async term => {
  const response = await axiosClient.get('/search', {
    params: {
      q: term
    }
  });
  
  return response.data.items;
};