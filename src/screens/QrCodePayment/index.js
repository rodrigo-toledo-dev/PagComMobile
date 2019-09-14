import React, { useState, useEffect } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInputMask, MaskService } from 'react-native-masked-text';

import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import constantsAPI from '../../constantsApi';

import api from '../../services/api';

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function QrCodePaymentScreen({ navigation }) {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState('');
  let [money, setMoney] = useState('');

  calcButton = (value) => {
    setMoney(money+value);
  }

  onPressDelete = () => {
    let deleteValue = money.substring(
      0,
      money.length - 1
    );
    setMoney(deleteValue);
  }

  openPaymentCard = () => {
    if (money === "") {
      Alert.alert("Atenção", "Por favor digite o valor");
    } else {
      return Actions.paymentCard({
        money: this.state.money
      });
    }
  }

  buttonCancel = () => {
    return Actions.home();
  }


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

  // componentDidMount = () => {
  //   try {
  //     AsyncStorage.getItem('token').then( token => {
  //       const url = constantsAPI.BASE_URL + constantsAPI.GET_BALANCE;
  //       const headers = { headers: { Authorization: `Bearer ${token}` } };

  //       await api.get(url, headers).then( response => {
  //         let { balance } = response.data
  //         balance = MaskService.toMask('money', parseFloat(balance), {
  //           unit: 'R$',
  //           separator: ',',
  //           delimiter: '.',
  //         });

  //         this.setState({ balance });
  //       });
  //     });
  //   } catch (error) {
  //     console.tron.log(error);
  //   }
  // }

  return (
    <View style={generalStyles.container}>
      <ScrollView>

        <Text style={generalStyles.textBlueTitle}>Ler ou Gerar QR-Code's e Código de Barras é por aqui mesmo</Text>
        {show && (
          <ActivityIndicator
            size="large"
            color={"#007AFF"}
            animating={show}
            style={generalStyles.indicator}
          />
        )}


        <View style={styles.contentViewBgBlue}>
          <View style={styles.contentViewRow}>
            <Text style={styles.textWhiteBold}>
              Digitalize o código
            </Text>
            <View style={styles.contentViewBgCodeWhite}>

            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};


