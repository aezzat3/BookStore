import { create } from 'zustand';
import { Book } from '../types';

type Store = {
  favoriteBooks: Book[];
  books: Book[];
  addFavorite: (book: Book) => void;
  removeFavorite: (bookId: string) => void;
};

const useBookStore = create<Store>(set => ({
  favoriteBooks: [],
  books: [],
  addFavorite: book =>
    set(state => ({
      favoriteBooks: [...state.favoriteBooks, { ...book, isFavorite: true }],
    })),
  removeFavorite: bookId =>
    set(state => ({
      favoriteBooks: state.favoriteBooks.filter(book => book.id !== bookId),
    })),
}));

export default useBookStore;
