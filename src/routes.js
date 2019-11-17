import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

export default createAppContainer(
  createBottomTabNavigator({
    Home,
    Quiz,
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255,255,255, 0.6)',
      style: {
        backgroundColor: '#006400'
      }
    }
  })
);
