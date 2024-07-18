import create from 'zustand';

type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
};

type Store = {
  favoriteBooks: Book[];
  addFavorite: (book: Book) => void;
  removeFavorite: (bookId: string) => void;
};

const useBookStore = create<Store>(set => ({
  favoriteBooks: [],
  addFavorite: book =>
    set(state => ({
      favoriteBooks: [...state.favoriteBooks, book],
    })),
  removeFavorite: bookId =>
    set(state => ({
      favoriteBooks: state.favoriteBooks.filter(book => book.id !== bookId),
    })),
}));

export default useBookStore;
