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
          <Title>Educação Ambiental</Title>

          <Card>
            <CardText>
              {' '}
              - A Educação Ambiental corresponde à conscientização ambiental
              para questões que envolvem a valorização do meio ambiente e o
              comprometimento de atitudes voltadas à sua preservação.
            </CardText>
            <CardText>
              {' '}
              - A importância da educação ambiental reside na formação de
              cidadãos conscientes. Ela visa o aumento de práticas sustentáveis,
              bem como a redução de danos ambientais.
            </CardText>
          </Card>
        </Container>
      </ScrollView>
    </Background>
  );
}

Home.navigationOptions = {
  drawerLabel: 'Educação Ambiental',
  drawerIcon: ({ tintColor }) => (
    <Icon name="pageview" size={20} color={tintColor} />
  ),
};
