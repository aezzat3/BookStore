export interface Book {
  id: string;
  isFavorite?: boolean;
  volumeInfo: {
    [x: string]: any;
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}
