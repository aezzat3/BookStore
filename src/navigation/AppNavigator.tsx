import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import BookDetailsScreen from '../Screens/BookDetailsScreen';
import {BOOK_DETAILS, BOTTOM_TABS, HOME} from './NavNames';
import {Book} from '../types';

export type AppNavigatorParams = {
  BOTTOM_TABS: undefined;
  BOOK_DETAILS: {
    book: Book;
  };
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={BOTTOM_TABS}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={BOOK_DETAILS}
          options={{
            title: 'Book Details',
          }}
          component={BookDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
