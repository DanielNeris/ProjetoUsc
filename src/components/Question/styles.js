import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const QuestionTitle = styled.Text`

`
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Answer = styled.Button`
  margin-top: 5px;
  border-radius: 4px;
`;
