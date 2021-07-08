import styled from 'styled-components/native';

export const Root = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background-color: red;
  border-radius: 4px;
`;
