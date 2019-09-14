import React from 'react';

import {
  Container, ContainerText,
} from './styles';

const RequiredField = ({ message }) => (
  <Container>
    <ContainerText>{message}</ContainerText>
  </Container>
);

export default RequiredField;
