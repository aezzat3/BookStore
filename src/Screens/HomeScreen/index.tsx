import React, {useState} from 'react';
import {FlatList, StyleSheet, Platform, TextInput} from 'react-native';
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

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<AppNavigatorParams>>();
  const [searchText, setSearchText] = useState('');

  const {data, isLoading, error} = useQuery<Book[]>(['books'], () =>
    fetchBooks(),
  );

  const filteredData = data?.filter(item =>
    item.volumeInfo.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorComponent />;
  }

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Search for books"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => `item--${item.id}`}
        data={filteredData}
        renderItem={({item}) => (
          <BookCard
            book={item.volumeInfo}
            onPress={() => navigation.navigate(BOOK_DETAILS, {book: item})}
          />
        )}
        onEndReachedThreshold={Platform.OS === 'android' ? 0.2 : 0}
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 0.3,
    margin: 20,
    borderRadius: 8,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
});

export default HomeScreen;
