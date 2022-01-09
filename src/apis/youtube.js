import axios from 'axios';

const KEY = 'AIzaSyD8TJ9JFWjvjTniZ8dHwE2oA-ie5zARnFw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});