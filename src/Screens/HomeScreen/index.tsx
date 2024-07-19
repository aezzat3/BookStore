import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, Platform, TextInput, View} from 'react-native';
import {useQuery} from 'react-query';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Book} from '../../types';
import {fetchBooks} from '../../services/bookService';
import {BOOK_DETAILS} from '../../navigation/NavNames';
import BookCard from '../../components/BookCard';
import {AppNavigatorParams} from '../../navigation/AppNavigator';
import Spinner from '../../components/Spinner';
import ErrorComponent from '../../components/ErrorComponent';
import {COLORS} from '../../common/Colors';
import {calcHeight, calcWidth} from '../../utils/scale';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<AppNavigatorParams>>();
  const [searchText, setSearchText] = useState('');

  const {data, isLoading, error} = useQuery<Book[]>('books', fetchBooks);

  const filteredData = data?.filter(
    item =>
      item.volumeInfo.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.volumeInfo.authors?.some((author: string) =>
        author.toLowerCase().includes(searchText.toLowerCase()),
      ),
  );

  const handlePress = useCallback(
    (book: Book) => {
      navigation.navigate(BOOK_DETAILS, {book});
    },
    [navigation],
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorComponent />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for book"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => `item--${item.id}`}
        data={filteredData}
        renderItem={({item}) => (
          <BookCard book={item} onPress={() => handlePress(item)} />
        )}
        onEndReachedThreshold={Platform.OS === 'android' ? 0.2 : 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcWidth(20),
  },
  contentContainer: {
    paddingBottom: calcHeight(20),
  },
  input: {
    height: calcHeight(40),
    borderColor: COLORS.gray,
    borderWidth: 0.3,
    marginVertical: calcHeight(10),
    borderRadius: 8,
    paddingHorizontal: calcWidth(10),
  },
  item: {
    padding: calcWidth(16),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
