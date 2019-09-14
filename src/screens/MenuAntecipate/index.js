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
  let [radio1, setRadio1] = useState(false);
  let [radio2, setRadio2] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("radio").then(radio => {
      if (radio == "radioOne") {
        handleRadioOne
      } else if (radio == "radioTwo") {
        handleRadioTwo
      }
      console.tron.log(radio)
    });
  })

  handleRadioOne = () => {
    setRadio1(true)
    setRadio2(false)
  }

  handleRadioTwo = () => {
    setRadio1(false);
    setRadio2(true);
  }

  handleAccept = () => {
    if (!radio1 && !radio2) {
      Alert.alert("Atenção", "Por favor selecione uma das opções");
    } else {
      if (radio1) {
        AsyncStorage.setItem("radio", "radioOne");
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
        AsyncStorage.setItem("radio", "radioTwo");
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
  }

  buttonCancel = () => {
    return Actions.home();
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
              checked={radio1}
              onPress={handleRadioOne}
            />
            <Body>
              <Text style={styles.checkBoxTextGray}>Ativado</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              style={styles.checkBox}
              checked={radio2}
              onPress={handleRadioTwo}
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


