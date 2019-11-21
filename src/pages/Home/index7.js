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
          <Title>Ser socialmente justo</Title>

          <Card>
            {/* <CardTitle>O que é sustentabilidade? </CardTitle> */}

            <CardText>
              {' '}
              - É referente ao âmbito social do tripé da sustentabilidade. Aqui
              o importante é o modo como o ser humano é tratado, seja pela
              sociedade ou por uma empresa, por exemplo.
            </CardText>
            <CardText>
              {' '}
              - A prioridade é a valorização da qualidade de vida das pessoas,
              concomitante a manutenção dos outros dois aspectos: ambiental e
              econômico.
            </CardText>
            <CardText>
              {' '}
              - No caso de uma empresa que deseja agir de acordo com o conceito
              da sustentabilidade, ser socialmente justo significa valorizar não
              apenas o público-alvo, mas também garantir o desenvolvimento
              pessoal dos funcionários, fornecedores e todas as pessoas que
              fazem parte (direta ou indiretamente) da companhia.
            </CardText>
          </Card>
        </Container>
      </ScrollView>
    </Background>
  );
}

Home.navigationOptions = {
  drawerLabel: 'Ser socialmente',
  drawerIcon: ({ tintColor }) => (
    <Icon name="pageview" size={20} color={tintColor} />
  ),
};
