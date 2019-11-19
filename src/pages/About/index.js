import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

import Background from '~/components/Background';

import { Container, Title, Card, CardTitle, CardText } from './styles';

export default function About() {
  return (
    <Background>
      <ScrollView>
        <Container>
          <Title>CRÉDITOS</Title>

          <Card>
            <CardTitle>Integrantes:</CardTitle>

            <CardText>Daniel de Souza Neris</CardText>
            <CardText>Nathan Silva Barbosa</CardText>
            <CardText>Marcus Vinicius</CardText>
          </Card>

          <Card>
            <CardTitle>Curso:</CardTitle>

            <CardText>Ciência da Computação</CardText>
          </Card>

          <Card>
            <CardTitle>Disciplina:</CardTitle>

            <CardText>Programação de Computadores</CardText>
          </Card>

          <Card>
            <CardTitle>Professor:</CardTitle>

            <CardText>Prof. Dr. Elvio Gilberto da Silva</CardText>
          </Card>
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
