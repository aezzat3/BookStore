import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useBookStore from '../../store/useBookStore';

const BookDetailsScreen = () => {
  const route = useRoute();
  const {book} = route.params;
  const {addFavorite, removeFavorite, favoriteBooks} = useBookStore(
    state => state,
  );
  const isFavorite = favoriteBooks.some(favBook => favBook.id === book.id);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: book.volumeInfo.imageLinks.thumbnail}}
        style={styles.image}
      />
      <Text style={styles.title}>{book.volumeInfo.title}</Text>
      <Text style={styles.author}>{book.volumeInfo.authors.join(', ')}</Text>
      <Text style={styles.description}>{book.volumeInfo.description}</Text>
      <Button
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={() => {
          if (isFavorite) {
            removeFavorite(book.id);
          } else {
            addFavorite({
              id: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors.join(', '),
              description: book.volumeInfo.description,
              coverImage: book.volumeInfo.imageLinks.thumbnail,
            });
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  author: {
    fontSize: 18,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default BookDetailsScreen;
