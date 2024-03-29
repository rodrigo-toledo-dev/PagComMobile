import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function RequestMoneyScreen({ navigation }) {
  let [isVisiblePickerOne, setIsVisiblePickerOne] = useState(false);
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [duedateInput, setDuedateInput] = useState('');
  let [duedate, setDuedate] = useState('');
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


  async function requestMoney(){
    try {
      if (email === "" || name === "" || description === "" || duedate === "" || money === "") {
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
      <ScrollView>

        <Text style={generalStyles.textBlueTitle}>Solicite pagamentos na hora e de onde estiver</Text>
        <Image
          source={require("../../images/homeSend/ic_money_send.png")}
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
        <Text style={generalStyles.textGray}>Você pode solicitar pagamentos por produtos e serviços num piscar de olhos. Tudo o que você precisa é preencher os campos abaixo</Text>
        <Text style={generalStyles.textGray}>Se estiver vendendo produtos ou serviços, você pode estar coberto pela nossa </Text>
        <Text style={generalStyles.textBlueTitle}>Proteção ao Vendedor.</Text>
        <Text style={generalStyles.textGray}>Digite o email de quem deseja solicitar um pagamento (você pode pagar uma tarifa por esta operação)</Text>

        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
          style={styles.input}
          onChangeText={value => setEmail({ value })}
        />

        <Text style={generalStyles.textGray}>Digite o nome de quem deseja solicitar um pagamento</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="Nome"
          style={styles.input}
          onChangeText={value => setName({ value })}
        />

        <Text style={generalStyles.textGray}>Escolha a data de vencimento</Text>
        <TouchableOpacity onPress={() => {setIsVisiblePickerOne(true)}}>
          <TextInput
            onTouchStart={() => {setIsVisiblePickerOne(true)}}
            value={duedateInput}
            editable={false}
            autoCapitalize="none"
            placeholder="Data de vencimento"
            style={styles.input}
            onChangeText={value => setDuedate(value)}
          />
        </TouchableOpacity>

        <DateTimePicker
          isVisible={isVisiblePickerOne}
          onConfirm={handlePickerOne}
          onCancel={handlePickerOne}
        />

        <Text style={generalStyles.textGray}>Digite a descrição do pagamento</Text>
        <TextInput
          multiline={true}
          autoCapitalize="none"
          placeholder="Descrição"
          style={styles.inputDescription}
          onChangeText={value => setDescription(value)}
        />

        <Text style={generalStyles.textGray}>Use nosso teclado para informar o valor do pagamento</Text>
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
            <TouchableOpacity onPress={() => this.homeSendConfirmRequest()}>
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
            <ButtonLinearGradient onPress={requestMoney} text='Solicitar agora' />
          </View>
        </View>

      </ScrollView>

    </View>
  );
};


