import React, {FC} from 'react';
import {Root} from './styles';
import {IButton} from './types';

export const Button: FC<IButton> = ({children, onPress}) => {
  return <Root onPress={onPress}>{children}</Root>;
};
