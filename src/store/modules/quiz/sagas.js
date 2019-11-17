import { Alert } from 'react-native';
import { takeLatest, put, all } from 'redux-saga/effects';
// import api from '~/services/api';

import { answerSuccess, answerFailure } from './actions';

export function* sendAnswer({ payload }) {
  try {
    const { answer, correctAnswer } = payload;

    let testeResponse = false;

    if (answer === correctAnswer) {
      testeResponse = true;
    }

    if (testeResponse) {
      yield put(answerSuccess());
      Alert.alert('Sucesso!', 'Resposta Correta!');
      return;
    }

    yield put(answerFailure());
    Alert.alert('Erro!', 'Resposta Errada!');
  } catch (error) {
    Alert.alert('Erro!', 'Entre em contato!');
    yield put(answerFailure());
  }
}

export default all([takeLatest('@quiz/ANSWER_REQUEST', sendAnswer)]);
