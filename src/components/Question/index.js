import React from 'react';
import { Text } from 'react-native';

import { Container, QuestionTitle, List, Answer } from './styles';

export default function Question({ data }) {
  return (
    <>
      <Container>
        <QuestionTitle>{data.question}</QuestionTitle>
      </Container>
      <List
        data={data.options}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Answer onPress={() => setAnswer(item)} title={item} />}
      />
    </>
  );
}
