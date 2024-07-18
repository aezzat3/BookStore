import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Book} from '../../types';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/Colors';
import {IMAGE_PLACEHOLDER} from '../../common/Constant';

interface Props {
  book: Book['volumeInfo'];
  onPress: (book: Book['volumeInfo']) => void;
}

const BookCard: React.FC<Props> = ({book, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => onPress(book)}>
      <Image
        source={{
          uri: IMAGE_PLACEHOLDER,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {book.description}
        </Text>
        <Text
          style={styles.author}
          numberOfLines={1}>{`author: ${book.authors[0]}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
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
    marginBottom: 20,
    borderRadius: 10,
    minHeight: 140,
  },
  image: {
    width: '25%',
    height: '100%',
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    marginBottom: 10,
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 14,
  },
  author: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: 10,
  },
  description: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: 10,
  },
});

export default BookCard;
