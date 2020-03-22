import axios from 'axios';
import helper from '../helper/helper';

export default axios.create({
  baseURL: `${helper.unsplash.baseUrl}`,
  headers: {
    Authorization: `${helper.unsplash.apiKey}`
  }
});