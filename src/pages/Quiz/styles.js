import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  border-radius: 4px;
  background: #006400;
`;

export const Answer = styled(Button)`
  padding: 10px;
  height: 60px;
  margin-top: 5px;
  border-radius: 4px;
  background: ${props => (props.check ? '#fff' : '#8FBC8F')};
`;

export const Question = styled.View`
  width: 335px;
  margin: 0 30px;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;

  align-items: center;
  justify-content: center;
  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const QuestionTitle = styled.Text`
  color: #000;
`

export const Response = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Score = styled.Text`

`
