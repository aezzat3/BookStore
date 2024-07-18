import { Book } from '../types';
import apiClient from './apiClient';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await apiClient.get('/volumes?q=react-native');
  return response.data.items;
};
