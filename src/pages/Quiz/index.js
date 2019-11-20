import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Form, Input } from '@rocketseat/unform';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert, FlatList, Text, SafeAreaView } from 'react-native';

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

import response from '~/config/data';

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
      <SafeAreaView style={{ flex: 1 }}>
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
                Enviar
                {/* <Icon name="send" size={20} color="#fff" /> */}
              </SubmitButton>
              <SubmitButton onPress={handleReset}>
                Recomeçar
                {/* <Icon name="restore" size={20} color="#fff" /> */}
              </SubmitButton>
            </Form>
          ) : (
            <>
              <Response>
                <Score>Pontuação: {score}</Score>
              </Response>
              <SubmitButton onPress={handleReset}>
                Recomeçar
                {/* <Icon name="restore" size={20} color="#fff" /> */}
              </SubmitButton>
            </>
          )}
        </Container>
      </SafeAreaView>
    </Background>
  );
}

Quiz.navigationOptions = {
  tabBarLabel: 'QUIZ',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="games" size={20} color={tintColor} />
  ),
};
