import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Book} from '../../types';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/Colors';
import {IMAGE_PLACEHOLDER} from '../../common/Constant';
import Icon from 'react-native-vector-icons/Ionicons';
import useBookStore from '../../store/useBookStore';
import {calcFontWeight, calcHeight, calcWidth} from '../../utils/scale';
import FastImage from 'react-native-fast-image';

interface Props {
  book: Book;
  onPress: (book: Book) => void;
}

const BookCard: React.FC<Props> = ({book, onPress}) => {
  const {addFavorite, removeFavorite, favoriteBooks} = useBookStore();

  const isFav = favoriteBooks.some(favBook => favBook.id === book.id);

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => onPress(book)}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri:
            book.volumeInfo.imageLinks.thumbnail.replace('http', 'https') ||
            IMAGE_PLACEHOLDER,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{book.volumeInfo.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {book.volumeInfo.description}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          {book.volumeInfo.authors.join(', ')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => (isFav ? removeFavorite(book.id) : addFavorite(book))}>
        <Icon
          name={'heart'}
          size={20}
          color={isFav ? COLORS.green : COLORS.gray}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: calcWidth(10),
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: calcHeight(20),
    borderRadius: 10,
    minHeight: calcHeight(140),
  },
  image: {
    width: '25%',
    height: '100%',
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: calcWidth(10),
  },
  title: {
    marginBottom: calcWidth(10),
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: calcFontWeight(14),
  },
  author: {
    color: COLORS.gray,
    fontSize: calcFontWeight(12),
    marginBottom: calcWidth(10),
  },
  description: {
    color: COLORS.gray,
    fontSize: calcFontWeight(12),
    marginBottom: calcWidth(10),
  },
});

export default memo(BookCard);
