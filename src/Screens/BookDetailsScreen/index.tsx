import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {AppNavigatorParams} from '../../navigation/AppNavigator';
import {calcFontWeight, calcWidth} from '../../utils/scale';
import FastImage from 'react-native-fast-image';

const BookDetailsScreen = () => {
  const {
    params: {book},
  } = useRoute<RouteProp<AppNavigatorParams, 'BOOK_DETAILS'>>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: book.volumeInfo.imageLinks.thumbnail,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{book.volumeInfo.title}</Text>
      <Text style={styles.author}>{book.volumeInfo.authors.join(', ')}</Text>
      <Text style={styles.description}>{book.volumeInfo.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcWidth(16),
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: calcFontWeight(24),
    fontWeight: 'bold',
    marginVertical: calcWidth(8),
  },
  author: {
    fontSize: calcFontWeight(18),
    color: 'gray',
  },
  description: {
    fontSize: calcFontWeight(16),
    marginBottom: calcWidth(50),
  },
});

export default BookDetailsScreen;
