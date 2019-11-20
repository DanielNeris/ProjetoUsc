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
          <Title>Sustentabilidade Ambiental</Title>

          <Card>
            {/* <CardTitle>O que é sustentabilidade? </CardTitle> */}

            <CardText>
              {' '}
              - A Sustentabilidade ambiental abrange a conservação e a
              manutenção do meio ambiente.
            </CardText>
            <CardText>
              {' '}
              - Importante notar que, para que a sustentabilidade ambiental seja
              efetivada, as pessoas devem estar em harmonia com o meio ambiente,
              para obterem melhoria na qualidade de vida.
            </CardText>
            <CardText>
              {' '}
              - O objetivo da sustentabilidade ambiental é que os interesses das
              gerações futuras não estejam comprometidos pela satisfação das
              necessidades da geração atual.
            </CardText>
          </Card>
        </Container>
      </ScrollView>
    </Background>
  );
}

Home.navigationOptions = {
  drawerLabel: 'Sustentabilidade Ambiental',
  drawerIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={20} color={tintColor} />
  ),
};
