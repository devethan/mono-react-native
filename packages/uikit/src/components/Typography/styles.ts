import styled from 'styled-components/native';

const TextBase = styled.Text`
  font-size: 16px;
  font-weight: normal;
`;

export const Default = styled(TextBase)`
  color: white;
`;

export const Heading = styled(TextBase)`
  font-size: 32px;
  font-weight: bold;
  margin: 32px;
`;
