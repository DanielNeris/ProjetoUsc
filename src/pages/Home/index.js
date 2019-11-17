import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Home() {
  return (
    <Background>
      <Container>
        <Title>Home</Title>
      </Container>
    </Background>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={20} color={tintColor} />
  ),
};