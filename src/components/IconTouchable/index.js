import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text
} from 'react-native';


const IconTouchable = ({text, icon}) => (
  <>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Icon name={icon} size={25} color="#000" />
      <Text style={{fontSize: 17}}>{text}</Text>
    </View>
  </>
);

export default IconTouchable;