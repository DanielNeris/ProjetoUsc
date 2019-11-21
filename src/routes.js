import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createDrawerNavigator } from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import Home2 from './pages/Home/index2';
import Home3 from './pages/Home/index3';
import Home4 from './pages/Home/index4';
import Home5 from './pages/Home/index5';
import Home6 from './pages/Home/index6';
import Home7 from './pages/Home/index7';

import Quiz from './pages/Quiz';
import About from './pages/About';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: createDrawerNavigator(
        {
          Home,
          Home2,
          Home3,
          Home4,
          Home5,
          Home6,
          Home7,
        },
        {
          contentOptions: {
            activeTintColor: '#006400',
            inactiveTintColor: 'rgba(0,100,0, 0.8)',
          },
          navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="dashboard" size={20} color={tintColor} />
            ),
          },
        },
      ),
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
