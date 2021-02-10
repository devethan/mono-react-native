import React, {FC} from 'react';
import styled from 'styled-components/native';

interface ITypography {
  variant?: 'primary';
}
const Typography: FC<ITypography> = ({children}) => {
  return <RootContainer>{children}</RootContainer>;
};

const RootContainer = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export default Typography;
