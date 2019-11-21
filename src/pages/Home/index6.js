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
          <Title>Economicamente viável</Title>

          <Card>
            {/* <CardTitle>O que é sustentabilidade? </CardTitle> */}

            <CardText>
              {' '}
              - Este ponto se refere ao aspecto econômico do tripé. Neste caso,
              as empresas, por exemplo, devem investir economicamente em prol do
              bem-estar social e, principalmente, ambiental.
            </CardText>
            <CardText>
              {' '}
              - A sustentabilidade prevê não apenas a preservação ambiental e
              bem-estar da sociedade, mas também o desenvolvimento econômico. Ou
              seja, para que isso ocorra as empresas precisam continuar a gerar
              lucros. No entanto, a obtenção do resultado econômico positivo não
              deve estar alinhado com métodos e estratégias que devastem o meio
              ambiente.
            </CardText>
          </Card>
        </Container>
      </ScrollView>
    </Background>
  );
}

Home.navigationOptions = {
  drawerLabel: 'Economicamente viável',
  drawerIcon: ({ tintColor }) => (
    <Icon name="pageview" size={20} color={tintColor} />
  ),
};
