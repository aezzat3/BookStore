import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import {FAVORITES, HOME} from './NavNames';
import {COLORS} from '../common/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName = route.name === HOME ? 'home' : 'heart';

          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? COLORS.green : COLORS.gray}
            />
          );
        },
        tabBarOptions: {
          activeTintColor: COLORS.green,
          inactiveTintColor: COLORS.gray,
        },
      })}>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={FAVORITES} component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
