import React, {FC} from 'react';
import styled from 'styled-components/native';

interface IProps {}
const GeneralDecorator: FC<IProps> = (Story: any) => {
  return (
    <Root>
      <Story />
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

export default GeneralDecorator;
