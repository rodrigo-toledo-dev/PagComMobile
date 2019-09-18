import React, { useState, useEffect } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInputMask, MaskService } from 'react-native-masked-text';

import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import constantsAPI from '../../constantsApi';

import api from '../../services/api';

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function MenuOptionsScreen({ navigation }) {
  let [show, setShow] = useState(false);


  async function sendMoney(){
    try {
      if (email === "" || money === "") {
        Alert.alert("Atenção", "Por favor preencha todos os campos");
      } else {
        // Actions.homeRequestAddContact({
        //   email: this.state.email
        // });
      }
    } catch (error) {
      Alert.alert("Atenção", "Por favor preencha todos os campos");
    }
  }

  return (
    <View style={generalStyles.container}>
      <View>
        <ListItem
          button={true}
          onPress={() => {navigation.navigate('MenuAntecipate')}}
          noBorder
        >
          <View style={styles.iconRowMenu}>
            <Image
              style={styles.iconMenu}
              source={require("../../images/menu/ic_antecipation.png")}
            />
            <Text style={styles.textBlue}>Antecipar</Text>
          </View>
        </ListItem>

        <ListItem
          button={true}
          onPress={() => {navigation.navigate('MenuPayments')}}
          noBorder
        >
          <View style={styles.iconRowMenu}>
            <Image
              style={styles.iconMenu}
              source={require("../../images/menu/ic_money.png")}
            />
            <Text style={styles.textBlue}>Pagamentos</Text>
          </View>
        </ListItem>

        <ListItem
          button={true}
          onPress={() => {navigation.navigate('MenuDeposits')}}
          noBorder
        >
          <View style={styles.iconRowMenu}>
            <Image
              style={styles.iconMenu}
              source={require("../../images/menu/ic_contact.png")}
            />
            <Text style={styles.textBlue}>Depósitos</Text>
          </View>
          <View style={styles.viewBorder} />
        </ListItem>

      </View>
    </View>
  );
};


