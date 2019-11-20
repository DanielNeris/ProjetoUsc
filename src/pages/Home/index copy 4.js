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
          <Title>O que é sustentabilidade?</Title>

          <Card>
            {/* <CardTitle>O que é sustentabilidade? </CardTitle> */}

            <CardText>
              {' '}
              - Sustentabilidade é a capacidade de sustentação ou conservação de
              um processo ou sistema.
            </CardText>
            <CardText>
              {' '}
              - A palavra sustentável deriva do latim sustentare e signiﬁca
              sustentar, apoiar, conservar e cuidar.
            </CardText>
            <CardText>
              {' '}
              - O conceito de sustentabilidade aborda a maneira como se deve
              agir em relação à natureza. Além disso, ele pode ser aplicado
              desde uma comunidade até todo o planeta.
            </CardText>
          </Card>
        </Container>
      </ScrollView>
    </Background>
  );
}

Home.navigationOptions = {
  drawerLabel: 'O que é?',
  drawerIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={20} color={tintColor} />
  ),
};
