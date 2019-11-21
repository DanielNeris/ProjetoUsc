import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

import Background from '~/components/Background';

import { Container, Title, Card, CardTitle, CardText } from './styles';

export default function Home() {
  return (
    <Background>
      <ScrollView>
        <Container>
          <Title>Ecologicamente correto</Title>

          <Card>
            {/* <CardTitle>O que é sustentabilidade? </CardTitle> */}

            <CardText>
              {' '}
              - Está relacionado com o aspecto ambiental do tripé da
              sustentabilidade. Ou seja, a importância de levar em consideração
              o meio ambiente ao longo do desenvolvimento da humanidade.
            </CardText>
            <CardText>
              {' '}
              - Qualquer tipo de atividade que tenha como consequência impactos
              ambientais negativos deve ser evitado. Neste sentido, o grupo
              social deve pensar de modo a evitar o desgaste dos recursos
              naturais, por exemplo.
            </CardText>
          </Card>
        </Container>
      </ScrollView>
    </Background>
  );
}

Home.navigationOptions = {
  drawerLabel: 'Ecologicamente correto',
  drawerIcon: ({ tintColor }) => (
    <Icon name="pageview" size={20} color={tintColor} />
  ),
};
