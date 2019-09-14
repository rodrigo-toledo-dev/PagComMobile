import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInputMask, MaskService } from 'react-native-masked-text';

import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import moment from "moment";
import constantsAPI from '../../constantsApi';;

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function WithDrawMoneyScreen({ navigation }) {
  let [show, setShow] = useState(false);
  let [money, setMoney] = useState('');

  handlePickerOne = datetime => {
    const date = moment(datetime).format("DD/MM/YYYY");

    setIsVisiblePickerOne(false);
    setDuedateInput(date)
    setDuedate(date.split("/").reverse().join("-"))
  };

  calcButton = value => {
    setMoney(money+value);
  }

  onPressDelete = () => {
    let deleteValue = money.substring(
      0,
      money.length - 1
    );
    setMoney(deleteValue);
  }

  drawValue = () => {
    if (money == "" || money == undefined) {
      Alert.alert("Atenção", "Por favor preencha o campo para sacar");
    } else {
      AsyncStorage.getItem("token").then(token => {
        setShow(true);

        let moneyService = MaskService.toMask("money", money, {
          unit: "",
          separator: '.',
          delimiter: ","
        });

        moneyService = moneyService.replace(',','');

        let url = constantsAPI.BASE_URL + constantsAPI.DRAWBALANCE;
        fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            withdraw: {
              amount: moneyService
            }
          })
        })
          .then(response => response.json())
          .then(response => {
            console.tron.log(response);
            setShow(false);
            Alert.alert("Atenção", "Saque realizado com sucesso");
          })
          .catch(() => {
            console.tron.log(response);
            setShow(false);
            Alert.alert(
              "Atenção",
              "Erro ao realizar saque tente novamente mais tarde"
            );
          })
          .done();
      });
    }
  }


  return (
    <View style={generalStyles.container}>
      <ScrollView>

        <Text style={generalStyles.textBlueTitle}>Para um Sacar Valor basta preencher o campo abaixo</Text>
        <Image
          source={require("../../images/ic_pay_blue.png")}
          style={styles.iconMenu}
        />
        {show && (
          <ActivityIndicator
            size="large"
            color={"#007AFF"}
            animating={show}
            style={generalStyles.indicator}
          />
        )}

        <Text style={generalStyles.textGray}>Use nosso teclado para informar o valor a sacar</Text>
        <TextInputMask
          editable={false}
          type={"money"}
          style={styles.input}
          value={money}
          placeholder="R$0,00"
        />

        <View style={generalStyles.keyboardContainer}>
          <View style={styles.buttonViewRow}>
            <TouchableOpacity onPress={() => calcButton(1)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => calcButton(2)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => calcButton(3)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressDelete()}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/x.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonViewRow}>
            <TouchableOpacity onPress={() => calcButton(4)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => calcButton(5)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/5.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => calcButton(6)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/6.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.drawValue()}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/ok.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonViewRow}>
            <TouchableOpacity onPress={() => calcButton(7)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/7.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => calcButton(8)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/8.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => calcButton(9)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/9.png")}
              />
            </TouchableOpacity>
            <Image
              style={styles.buttonKeyboard}
              source={require("../../images/keyboard/empty.png")}
            />
          </View>
          <View style={styles.buttonViewRow}>
            <Image
              style={styles.buttonKeyboard}
              source={require("../../images/keyboard/empty.png")}
            />
            <TouchableOpacity onPress={() => calcButton(0)}>
              <Image
                style={styles.buttonKeyboard}
                source={require("../../images/keyboard/0.png")}
              />
            </TouchableOpacity>
            <Image
              style={styles.buttonKeyboard}
              source={require("../../images/keyboard/empty.png")}
            />
            <Image
              style={styles.buttonKeyboard}
              source={require("../../images/keyboard/empty.png")}
            />
          </View>
        </View>

        <View style={generalStyles.mainActionsView}>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={() => { navigation.navigate('Home') }} text='Agora não' />
          </View>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={drawValue} text='Sacar agora' />
          </View>
        </View>

      </ScrollView>

    </View>
  );
};


