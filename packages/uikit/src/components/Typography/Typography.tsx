import React, {FC} from 'react';
import {ITypography} from './types';
import {Default, Heading} from './styles';

export const Typography: FC<ITypography> = ({children, variants}) => {
  if (variants === 'heading') {
    return <Heading>{children}</Heading>;
  }

  return <Default>{children}</Default>;
};
