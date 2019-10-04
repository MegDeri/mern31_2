// export const API_URL = 'api';
// export const BASE_URL = 'https://mern31-6.herokuapp.com/';

export const API_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : 'http://localhost:8000/api';
export const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : 'http://localhost:3000/';