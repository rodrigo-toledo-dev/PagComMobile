import React, { useState, useEffect } from 'react';

import { KeyboardAvoidingView, Platform, View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import constantsAPI from '../../constantsApi';

import styles from './styles';
import logo from '../../images/logo.png';
import generalStyles from '../../generalStyles';

export default function LoginScreen({ navigation }) {

  let [show, setShow] = useState(false);
  const [email, setEmail] = useState('diegocharles@me.com.br');
  const [password, setPassword] = useState('foobar');

  // useEffect(() => {
  //   AsyncStorage.getItem('token').then(token =>{
  //     if(token){
  //       navigation.navigate('Home');
  //     }
  //   })
  // }, []);

  async function loginAttempt(){
    if (email === "") {
      Alert.alert("Atenção", "Por favor preencha o campo email");
    } else if (password === "") {
      Alert.alert("Atenção", "Por favor preencha o campo senha");
    } else {
      setShow(true)

      const url = constantsAPI.BASE_URL + constantsAPI.LOGIN;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user: { email, password }
        })
      })
        .then(response => response.json())
        .then(response => {
          setShow(false)

          if(typeof response.token === 'undefined') {
            setShow(false)
            Alert.alert("Atenção", "Email ou senha incorretos");
          } else {
            let id = JSON.stringify(response.id);
            id = id.replace(/"/g, "");

            let token = JSON.stringify(response.token);
            token = token.replace(/"/g, "");

            let username = JSON.stringify(response.username);
            username = username.replace(/"/g, "");

            let balance = JSON.stringify(response.balance);
            balance = balance.replace(/"/g, "");

            AsyncStorage.setItem("id", id);
            AsyncStorage.setItem("token", token);
            AsyncStorage.setItem("username", username);
            AsyncStorage.setItem("balance", balance);


            // AsyncStorage.setItem("id", String(response.id));
            // AsyncStorage.setItem("token", response.token);
            // AsyncStorage.setItem("username", response.username);
            // AsyncStorage.setItem("balance", response.balance);
            navigation.navigate('Home');
          }
        })
        .catch((error) => {
          setShow(false)
          Alert.alert("Atenção", "senha incorreta");
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

      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
        placeholderTextColor="#125a80"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Senha"
        placeholderTextColor="#125a80"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => {navigation.navigate('ForgotPassword')}}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <ButtonLinearGradient onPress={loginAttempt} text='Entrar' />
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
        <Text style={styles.forgotPasswordText}>Ainda não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};
