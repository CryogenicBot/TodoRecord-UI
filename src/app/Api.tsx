import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.50.20:1234/'
});