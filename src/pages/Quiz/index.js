import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Form, Input } from '@rocketseat/unform';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert, FlatList, Text, ScrollView } from 'react-native';

import Background from '~/components/Background';
// import Quenstion from '~/components/Question';

import { answerRequest, reset } from '~/store/modules/quiz/actions';

import {
  Container,
  Title,
  SubmitButton,
  Form,
  Question,
  QuestionTitle,
  Answer,
  Response,
  Score,
} from './styles';

export default function Quiz({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.quiz.loading);
  const score = useSelector(state => state.quiz.score);

  const [answerCheckd, setAnswerCheckd] = useState(false);
  const [answer, setAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [len, setLen] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  function handleSubmit() {
    if (answer === '') {
      Alert.alert('Erro!', 'Resposta vazia!');
      return;
    }

    dispatch(answerRequest(answer, correctAnswer));
    setCurrentQuestion(currentQuestion + 1);
    setAnswer('');
  }

  function handleCheckd() {
    setAnswerCheckd(true);
  }

  function handleAnswer(item) {
    setAnswerCheckd(true);
    setAnswer(item);
  }

  const response = [
    [
      {
        id: 1,
        question:
          'A alternativa que pareia corretamente o material com a cor do cesto é:',
        options: [
          'Plástico - Verde; Metal - Amarelo; Papel - Vermelho; Vidro - Azul; Orgânico - Marrom.',
          'Plástico - Azul; Metal - Amarelo; Papel - Vermelho; Vidro - Verde; Orgânico - Marrom.',
          'Plástico - Amarelo; Metal - Marrom; Papel - Verde; Vidro - Vermelho; Orgânico - Azul.',
          'Plástico - Marrom; Metal - Verde; Papel - Azul; Vidro - Amarelo; Orgânico - Vermelho.',
          'Nenhuma das anteriores.',
        ],
        answer: `Plástico - Azul; Metal - Amarelo; Papel - Vermelho; Vidro - Verde; Orgânico - Marrom.`,
      },
    ],
    [
      {
        id: 2,
        question: 'Quanto tempo o vidro leva para se decompor na natureza?',
        options: [
          '300 anos.',
          '1000 anos.',
          '100 anos.',
          '3000 anos.',
          'O vidro não é biodegradável.',
        ],
        answer: `O vidro não é biodegradável.`,
      },
    ],
    [
      {
        id: 3,
        question:
          'Assinale a alternativa que aponta corretamente os objetos que NÃO podem ser reciclados.',
        options: [
          'Embalagem de salgadinho (plástico); papel celofane; prato Duralex (vidro); esponja de aço.',
          'Garrafa PET; papel sulfite; cacos de vidro; lata de refrigerante.',
          'Prato de isopor (plástico); papelão; frasco de perfume; papel alumínio.',
          'Embalagem de xampu; jornal; copo de requeijão (vidro); lacre.',
          'Todos acima são recicláveis.',
        ],
        answer: `Embalagem de salgadinho (plástico); papel celofane; prato Duralex (vidro); esponja de aço.`,
      },
    ],
    [
      {
        id: 4,
        question:
          'Qual é o cuidado a ser tomado antes de enviar um determinado material para a reciclagem?',
        options: [
          'Cortá-lo em pedaços pequenos.',
          'Misturá-lo com materiais do mesmo gênero.',
          'Limpá-lo.',
          'Colocá-lo numa sacola.',
          'Não deve haver cuidados especiais.',
        ],
        answer: `Limpá-lo.`,
      },
    ],
    [
      {
        id: 5,
        question:
          'Quais são as consequências mais diretas do despejo inadequado do lixo?',
        options: [
          'Enchentes e doenças.',
          'Chuvas ácidas e o buraco na camada de ozônio.',
          'Extinção de algumas espécies de animais, plantas e bactérias.',
          'Esgotamento dos reservatórios de água no planeta e estiagem.',
          'Não há consequências.',
        ],
        answer: `Enchentes e doenças.`,
      },
    ],
    [
      {
        id: 6,
        question: 'Qual é a porcentagem do lixo que é reciclado no Brasil?',
        options: ['4%', '17%', '40%', '22%', '2%'],
        answer: `2%`,
      },
    ],
    [
      {
        id: 7,
        question: 'Qual é a cidade que mais produz lixo diariamente no Brasil?',
        options: [
          'Santos.',
          'São Paulo.',
          'Rio de Janeiro.',
          'Salvador.',
          'Vitória.',
        ],
        answer: `São Paulo.`,
      },
    ],
    [
      {
        id: 8,
        question: 'Qual é o país número 1 em reciclagem de alumínio?',
        options: [
          'Alemanha.',
          'Estados Unidos.',
          'Itália.',
          'Brasil.',
          'Japão.',
        ],
        answer: `Brasil.`,
      },
    ],
    [
      {
        id: 9,
        question: 'Que tipo de material gera mais resíduos no Brasil, com 52%?',
        options: [
          'Matéria orgânica.',
          'Vidro.',
          'Plástico.',
          'Metal.',
          'Papel.',
        ],
        answer: `Matéria orgânica.`,
      },
    ],
    [
      {
        id: 10,
        question:
          'Quais dos materiais abaixo podem gerar algum tipo de combustível?',
        options: [
          'Óleo e metal.',
          'Papel e plástico.',
          'Apenas óleo de cozinha.',
          'Apenas papel.',
          'Plástico e óleo de cozinha.',
        ],
        answer: `Plástico e óleo de cozinha.`,
      },
    ],
  ];

  async function loadQuestion() {
    // const response1 = await api.get('/WeatherForecast');
    setQuestion(response[currentQuestion - 1][0]);
    setOptions(response[currentQuestion - 1][0].options);
    setCorrectAnswer(response[currentQuestion - 1][0].answer);
    setLen(response.length);
  }

  useEffect(() => {
    loadQuestion();
  }, [currentQuestion, loadQuestion]);

  function handleReset() {
    setQuestion(response[0][0]);
    setOptions(response[0][0].options);
    setCorrectAnswer(1);
    setLen(response.length);
    setCurrentQuestion(1);
    setAnswer('');
    dispatch(reset());
  }

  return (
    <Background>
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <Title>QUIZ</Title>
          {currentQuestion <= len || len === 1 ? (
            <Form>
              <Question>
                <Text>
                  Pergunta: {currentQuestion} de {len}
                </Text>
                <QuestionTitle>{question.question}</QuestionTitle>
              </Question>

              <FlatList
                data={options}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => (
                  <Answer
                    check={answerCheckd}
                    onPress={() => handleAnswer(item)}>
                    {item}
                  </Answer>
                )}
              />

              <SubmitButton onPress={handleSubmit}>
                <Icon name="send" size={20} color="#fff" />
              </SubmitButton>
              <SubmitButton onPress={handleReset}>
                <Icon name="restore" size={20} color="#fff" />
              </SubmitButton>
            </Form>
          ) : (
            <>
              <Response>
                <Score>Pontuação: {score}</Score>
              </Response>
              <SubmitButton onPress={handleReset}>
                <Icon name="restore" size={20} color="#fff" />
              </SubmitButton>
            </>
          )}
        </Container>
      </ScrollView>
    </Background>
  );
}

Quiz.navigationOptions = {
  tabBarLabel: 'QUIZ',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="games" size={20} color={tintColor} />
  ),
};
