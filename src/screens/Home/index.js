import React, { useState, useEffect } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MaskService } from 'react-native-masked-text';

import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import Transactions from '../../components/Transactions';
import constantsAPI from '../../constantsApi';

import api from '../../services/api';

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function HomeScreen({ navigation }) {
  let [balance, setBalance] = useState('...');

  useEffect(() => {
    try {
      AsyncStorage.getItem('token').then( token => {
        const url = constantsAPI.BASE_URL + constantsAPI.GET_BALANCE;
        const headers = { headers: { Authorization: `Bearer ${token}` } };

        api.get(url, headers).then( response => {
          let { balance } = response.data
          balance = MaskService.toMask('money', parseFloat(balance), {
            unit: 'R$',
            separator: ',',
            delimiter: '.',
          });

          setBalance(balance);
        });
      });
    } catch (error) {
      console.tron.log('erro balance');
      console.tron.log(error);
    }
  }, []);

  async function requestMoney(){
    console.tron.log('Solicitando')
    navigation.navigate('RequestMoney')
  }

  async function sendMoney(){
    console.tron.log('Enviando')
    navigation.navigate('SendMoney')
  }

  async function qrCodePayment(){
    console.tron.log('Indo para QR')
    navigation.navigate('QrCodePayment')
  }

  async function menuOptions(){
    console.tron.log('Indo para MenuOptions')
    navigation.navigate('MenuOptions')
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={ styles.mainBalanceView}>
          <View style={ styles.balanceView }>
            <Text style={styles.textValue}>{balance}</Text>
            <Text style={styles.textBalance}>Saldo</Text>
          </View>
          <View style={styles.scanOptionsView}>
            <TouchableOpacity onPress={qrCodePayment}>
              <Image
                source={require('../../images/home/icon_right_one.png')}
                style={styles.iconRight}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={menuOptions}>
              <Image
                source={require('../../images/home/icon_right_three.png')}
                style={styles.iconRight}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={generalStyles.mainActionsView}>
          <ButtonLinearGradient style={styles.buttonContainer} onPress={sendMoney} text='Enviar' />
          <ButtonLinearGradient style={styles.buttonContainer} onPress={requestMoney} text='Solicitar' />
        </View>
        <View style={{height: '45%'}}>
          <Text style={styles.transactionsTitleText}>Transações</Text>
          <Transactions />
        </View>
      </View>
    </View>
  );
};


