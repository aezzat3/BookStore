import React from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useBookStore from '../../store/useBookStore';

const FavoritesScreen = () => {
  const {favoriteBooks, removeFavorite} = useBookStore(state => state);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteBooks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('BookDetails', {book: item})}
            />
            <Button
              title="Remove from Favorites"
              onPress={() => removeFavorite(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default FavoritesScreen;
