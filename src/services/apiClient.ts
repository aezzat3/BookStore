import axios from 'axios';

const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  params: {
    key: GOOGLE_BOOKS_API_KEY,
  },
});

export default apiClient;
