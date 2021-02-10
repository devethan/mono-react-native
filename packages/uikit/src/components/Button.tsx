import React, {FC} from 'react';
import styled from 'styled-components/native';

interface IButton {
  onPress: () => void;
}
const Button: FC<IButton> = ({children, onPress}) => {
  return <RootContainer onPress={onPress}>{children}</RootContainer>;
};

const RootContainer = styled.TouchableOpacity.attrs({activeOpacity: 0.8})`
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background-color: red;
  border-radius: 4px;
`;

export default Button;
