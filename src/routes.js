import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import About from './pages/About';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Quiz,
      About,
    },
    {
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255,255,255, 0.6)',
        style: {
          backgroundColor: '#006400',
        },
      },
    },
  ),
);
