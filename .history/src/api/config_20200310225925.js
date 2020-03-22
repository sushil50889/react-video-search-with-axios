import axios from 'axios';
import helper from '../helper/helper';

export default axios.create({
  baseURL: `${helper.youtube.baseUrl}`,
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: `${helper.youtube.apiKey}`
  }
});