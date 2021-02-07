import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

interface IButton {
  onPress: () => void;
}
const Button: FC<IButton> = ({children, onPress}) => {
  return <RootContainer onPress={onPress}>{children}</RootContainer>;
};

const RootContainer = styled.TouchableOpacity``;

export default Button;
