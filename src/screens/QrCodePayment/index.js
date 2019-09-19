import React, { useState, useEffect } from 'react';

import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { MaskService } from 'react-native-masked-text';
import AsyncStorage from '@react-native-community/async-storage';

import constantsAPI from '../../constantsApi';

import api from '../../services/api';

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function QrCodePaymentScreen({ navigation }) {
  let [show, setShow] = useState(false);
  let [username, setUserName] = useState('');
  let [balance, setBalance] = useState('');


  useEffect(() => {
    AsyncStorage.getItem("username").then(value => {
      setUserName(value)
    });

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
  }, []);

  return (
    <View style={[generalStyles.container, styles.container]}>
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

        <View style={styles.contentViewBgWhite}>
          <Text style={styles.textGrayBold}>Meu código QR</Text>
          <Text style={styles.textGray}>{username}</Text>

          <View style={styles.contentViewRow}>
            <View style={styles.contentViewBgQRCode}>
              {/* qr code 270 */}
            </View>
            <View style={styles.contentViewBgBarCode}>
            </View>
          </View>
          <View style={styles.contentViewBalance}>
            <Text style={styles.textGrayBottom}>Seu saldo atual </Text>
            <Text style={styles.textGrayBoldBottom}>
              {balance}
            </Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};


