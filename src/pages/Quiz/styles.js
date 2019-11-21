import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

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
  margin-top: 10px;
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
  padding: 10px 15px;
  height: 65px;
  margin-top: 5px;
  border-radius: 4px;
  background: #fff;
  /* background: ${props => (props.check ? '#fff' : '#8FBC8F')}; */
  width: 80%;
  margin: 0 10%;
  margin-bottom: 2%;
  color: #000;
`;

export const Question = styled.View`
  width: 80%;
  margin: 0 10%;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;

  align-items: center;
  justify-content: center;
  /* opacity: ${props => (props.past ? 0.6 : 1)}; */
`;

export const QuestionTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

export const Response = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Score = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding-top: 5px;
`;

export const TTT = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0;
`;
