import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function About() {
  return (
    <Background>
      <ScrollView>
        <Container>
          <Title>CRÉDITOS</Title>
        </Container>
      </ScrollView>
    </Background>
  );
}

About.navigationOptions = {
  tabBarLabel: 'CRÉDITOS',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="school" size={20} color={tintColor} />
  ),
};
