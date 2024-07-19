import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import useBookStore from '../../store/useBookStore';
import BookCard from '../../components/BookCard';
import {AppNavigatorParams} from '../../navigation/AppNavigator';
import {BOOK_DETAILS} from '../../navigation/NavNames';
import {calcWidth} from '../../utils/scale';

const FavoritesScreen = () => {
  const {favoriteBooks, removeFavorite} = useBookStore(state => state);
  const navigation = useNavigation<NavigationProp<AppNavigatorParams>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteBooks}
        renderItem={({item}) => (
          <BookCard
            book={item}
            onPress={() => navigation.navigate(BOOK_DETAILS, {book: item})}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: calcWidth(16),
  },
  item: {
    padding: calcWidth(16),
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default FavoritesScreen;
