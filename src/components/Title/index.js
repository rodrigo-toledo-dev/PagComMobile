import React from 'react';

import {
  Container, ContainerText,
} from './styles';

const Title = ({ text }) => (
  <Container>
    <ContainerText>{text}</ContainerText>
  </Container>
);

export default Title;
