import React, { useState, useEffect } from 'react';

import { KeyboardAvoidingView, Platform, View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import constantsAPI from '../../constantsApi';

import styles from './styles';
import logo from '../../images/logo.png';
import generalStyles from '../../generalStyles';

export default function ForgotPasswordScreen({ navigation }) {

  let [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   AsyncStorage.getItem('token').then(token =>{
  //     if(token){
  //       navigation.navigate('Home');
  //     }
  //   })
  // }, []);

  async function getInstructions(){
    if (email === "") {
      Alert.alert("Atenção", "Por favor preencha o campo email");
    } else {
      setShow(true)

      const url = constantsAPI.BASE_URL + constantsAPI.RECOVERY;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user: { email }
        })
      })
        .then(response => response.json())
        .then(response => {
          setShow(false)

          if(typeof response.token === 'undefined') {
            Alert.alert("Ops...", "Estamos verificando o possível erro. Será que seu e-mail está correto?");
          } else {
            Alert.alert("Aguarde...", "Foram enviadas instruções para seu e-mail, acesse para e basta seguir os passos.");
            navigation.navigate('Home');
          }
        })
        .catch((error) => {
          setShow(false)
          Alert.alert("Atenção", 'Estamos realizando manutenções, em breve o sistema estará operacional!');
        })
        .done();
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      {show && (
        <ActivityIndicator
          size="large"
          color={"#007AFF"}
          animating={show}
          style={generalStyles.indicator}
        />
      )}
      <>
        <Text style={styles.forgotPasswordText}>Preencha o campo abaixo com seu e-mail e clique para recuperar seu acesso</Text>
      </>
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
        placeholderTextColor="#125a80"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.button}>
        <ButtonLinearGradient onPress={getInstructions} text='Recuperar meu acesso' />
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.forgotPasswordText}>Voltar para acesso ao sistema</Text>
      </TouchableOpacity>
    </View>
  );
};
