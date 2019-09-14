import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Container, Text } from './styles';


export default function ButtonLinearGradient({ onPress, text, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Container>
        <Text>{text}</Text>
      </Container>
    </TouchableOpacity>
  );
}
