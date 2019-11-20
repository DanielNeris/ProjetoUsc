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
          <Title>Os 3 RS</Title>

          <Card>
            <CardText> Reduzi</CardText>
            <CardText>
              {' '}
              - Reduzir signiﬁca comprar bens e serviços de acordo com nossas
              necessidades para evitar desperdícios. O consumo consciente é
              importante não só para o bom funcionamento das ﬁnanças domésticas
              como também para o Meio Ambiente.
            </CardText>
            <CardText> Reutilizar</CardText>
            <CardText>
              {' '}
              - Jogamos muitas coisas no lixo que poderiam ser reutilizadas para
              outros ﬁns. Reutilizando, colaboramos para o desenvolvimento
              sustentável do planeta. Isto ocorre, pois tudo que é fabricado
              necessita do uso de energia e matéria-prima. Ao jogarmos algo no
              lixo, estamos também desperdiçando a energia que foi usada na
              fabricação, o combustível usado no transporte e a matéria prima
              empregada.
            </CardText>
            <CardText> Reciclar</CardText>
            <CardText>
              {' '}
              - A reciclagem é quase uma obrigação nos dias de hoje. O primeiro
              passo é separar o lixo reciclável (plástico, metais, vidro, papel)
              do lixo orgânico. O reciclável deve ser encaminhado para empresas
              ou cooperativas de trabalhadores de reciclagem, pois serão
              transformados novamente em matéria-prima para voltar ao ciclo
              produtivo. Além de gerar renda e emprego para pessoas que
              trabalham com reciclagem, é uma atitude que "limpa" o nosso
              planeta.
            </CardText>
          </Card>
        </Container>
      </ScrollView>
    </Background>
  );
}

Home.navigationOptions = {
  drawerLabel: 'Os 3 RS',
  drawerIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={20} color={tintColor} />
  ),
};
