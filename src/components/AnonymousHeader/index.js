import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import styles from './styles';

const AnonymousHeader = () => (
  <View style={styles.container}>
    <View style={styles.viewHeader}>
      <Image
        style={styles.logo}
        source={require('../../images/ic_logo_home.png')}
      />
    </View>
  </View>
);

export default AnonymousHeader;
