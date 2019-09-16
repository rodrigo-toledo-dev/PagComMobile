import React, { useState, useEffect } from 'react';

import { View, Text, Alert, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem, Content, Body, CheckBox } from "native-base";

import ButtonLinearGradient from '../../components/ButtonLinearGradient';

import constantsAPI from '../../constantsApi';

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function MenuAntecipateScreen({ navigation }) {
  let [show, setShow] = useState(false);
  let [enable, setEnable] = useState(false);
  let [effectOnBefore, setEffectOnBefore] = useState(true);

  useEffect(() => {
    setShow(true)
    getAntecipateStatus();
  },[effectOnBefore]);

  getAntecipateStatus = () => {
    if(effectOnBefore){
      setEffectOnBefore(false);
      AsyncStorage.getItem("token").then(token => {
        let url = constantsAPI.BASE_URL + constantsAPI.ACCOUNT_DATA;

        fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(response => {
            if (response.error) {
              console.tron.log("response erro Ao obter se esta antecipando:");
              console.tron.log(response.error);
            } else {
              console.tron.log('Antecipacao atual');
              console.tron.log(effectOnBefore);
              setEnable(response.enable_automatic_anticipation);
            }
            setShow(false)
          })
          .catch(() => {
            console.tron.log("get response error antecipando");
            setShow(false)
          })
          .done();
      });
    }
  }

  handleStatus = (status) => {
    setEnable(status)
  };

  handleAccept = () => {
    if (enable) {
      AsyncStorage.getItem("token").then(token => {
        setShow(true)

        let url = constantsAPI.BASE_URL + constantsAPI.ANTICIPATE;

        fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(() => {
            setShow(false)
            Alert.alert("Atenção", "Antecipação realizada com sucesso");
          })
          .catch(() => {
            setShow(false)
            Alert.alert(
              "Atenção",
              "Erro ao tentar contratar antecipação tente novamente mais tarde!"
            );
          })
          .done();
      });
    } else {
      AsyncStorage.getItem("token").then(token => {
        setShow(true)

        let url = constantsAPI.BASE_URL + constantsAPI.ANTICIPATE;

        fetch(url, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(() => {
            setShow(false)
            Alert.alert("Atenção", "Antecipação desativada com sucesso");
          })
          .catch(() => {
            setShow(false)
            Alert.alert(
              "Atenção",
              "Erro ao tentar contratar antecipação tente novamente mais tarde!"
            );
          })
          .done();
      });
    }
  }

  return (
    <View style={generalStyles.container}>
      <ScrollView>

        <Text style={generalStyles.textBlueTitle}>Antecipação Automática</Text>

        <Text style={generalStyles.textGrayBold}>Antecipe todo seu crédito disponível e receba suas vendas de crédito à vista</Text>
        <Text style={[generalStyles.textGray, generalStyles.h1]}>Valor da Taxa de antecipação automática: % a.m</Text>

        {show && (
          <ActivityIndicator
            size="large"
            color={"#007AFF"}
            animating={show}
            style={{
              flex: 1,
              justifyContent: "center",
              marginBottom: 5,
              marginTop: 5
            }}
          />
        )}

        <Content>
          <ListItem>
            <CheckBox
              style={styles.checkBox}
              checked={enable == true}
              onPress={() => {handleStatus(true)}}
            />
            <Body>
              <Text style={styles.checkBoxTextGray}>Ativado</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              style={styles.checkBox}
              checked={enable == false}
              onPress={() => {handleStatus(false)}}
            />

            <Body>
              <Text style={styles.checkBoxTextGray}>Desativado</Text>
            </Body>
          </ListItem>
        </Content>

        <View style={generalStyles.mainActionsView}>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={() => { navigation.navigate('Home') }} text='Agora não' />
          </View>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={handleAccept}  text='Salvar' />
          </View>
        </View>

      </ScrollView>

    </View>
  );
};


