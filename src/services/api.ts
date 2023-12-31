import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://light-api.onrender.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});
