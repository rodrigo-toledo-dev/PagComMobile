import React from 'react';
import { NavigationActions } from "react-navigation";

import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const SignedHeader = () => (
  <View style={styles.container}>
    <View style={styles.viewHeader}>
      <Image
        style={styles.logo}
        source={require('../../images/ic_logo_home.png')}
      />
    </View>
    <View style={styles.viewConfig}>
      <TouchableOpacity onPress={() => {NavigationActions.navigate({ routeName: 'Login' })}}>
        <Icon name="setting" size={30} color="#15638C" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {NavigationActions.navigate({ routeName: 'Login' })}}>
        <Icon name="export" size={30} color="#15638C" />
      </TouchableOpacity>
    </View>
  </View>
);

export default SignedHeader;
