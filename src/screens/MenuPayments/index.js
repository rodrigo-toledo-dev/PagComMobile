import React, { useState, useEffect } from 'react';

import { View, Text, Alert, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker, Content } from "native-base";

import PaymentListItem from '../../components/PaymentListItem';
import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import DatePicker from 'react-native-datepicker';
import moment from "moment";

import constantsAPI from '../../constantsApi';

import styles from './styles'
import generalStyles from '../../generalStyles';

export default function MenuPaymentsScreen({ navigation }) {
  let [show, setShow] = useState(false);

  let [isVisiblePickerOne, setIsVisiblePickerOne] = useState(false);

  let [initialDateIsVisible, setInitialDateIsVisible] = useState(false);
  let [initialDateInput, setInitialDateInput] = useState('');
  let [initialDate, setInitialDate] = useState();

  let [finalDateIsVisible, setFinalDateIsVisible] = useState(false);
  let [finalDateInput, setFinalDateInput] = useState('');
  let [finalDate, setFinalDate] = useState('');

  let [status, setStatus] = useState('');

  let [payments, setPayments] = useState(false);

  useEffect(() => {
    setShow(true)
    getPayments();
  },[]);

  getPayments = () => {
    AsyncStorage.getItem("token").then(token => {
      const url = constantsAPI.BASE_URL + constantsAPI.PAYMENT_LIST;

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
            console.tron.log("response error ao tentar obter Payments:");
            console.tron.log(response.error);
          } else {
            console.tron.log('Resultados atuais Payments');
            console.tron.log(response.payments);
            setPayments(response.payments);
          }
          setShow(false)
        })
        .catch(() => {
          console.tron.log("get response error Payments");
          setShow(false)
        })
        .done();
    });
  }

  hidePickerOne = () => {
    setIsVisiblePickerOne(false);
  };

  handleFinalDate = datetime => {
    const date = moment(datetime).format("DD/MM/YYYY");

    setFinalDateIsVisible(false);
    setFinalDateInput(date)
    setFinalDate(date.split("/").reverse().join("-"));
  };

  resetFinalDate = () => {
    setFinalDateIsVisible(false);
    setFinalDateInput('')
    setFinalDate('')
  }

  filter = () => {
    if(initialDate === '' || finalDate === '' || status === false){
      Alert.alert('Atenção', 'Por favor todos os filtros devem ser preenchidos')
    }else{
      AsyncStorage.getItem("token").then(token => {
        setShow(true);
        let initialDateToFilter = moment(initialDate).format("DD/MM/YYYY");
        let finalDateToFilter = moment(finalDate).format("DD/MM/YYYY");

        let statusToFilter = status;

        let url =
          constantsAPI.BASE_URL +
          constantsAPI.PAYMENT_FILTER +
          `?payments={"start_date":"${initialDateToFilter}","end_date":"${finalDateToFilter}","status":"${statusToFilter}"}`;

        fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(response => {
          setShow(false);
          if (response.error) {
            console.log("response error:");
            console.log(response.error);
            setShow(false);
          } else {
            console.tron.log('filtro ocorrendo');
            setPayments(response.payments);
            setShow(false);
          }
        })
        .catch(() => {
          setShow(false);
        })
        .done();
      });
    }
  }

  return (
    <ScrollView>

      <Text style={generalStyles.textBlueTitle}>Pagamentos</Text>
      <Text style={generalStyles.textGray}>Inicialmente os Pagamentos já serão listados mas você pode usar os filtros abaixo para obter melhores resultados</Text>

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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <DatePicker
            style={styles.inputDate}
            date={initialDate}
            mode="date"
            placeholder="Data Inicial"
            format="YYYY-MM-DD"
            minDate="1990-01-01"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: styles.datePickerIcon,
              dateInput: styles.datePickerInput
            }}
            onDateChange={(value) => {setInitialDate(value)}}
          />

          <DatePicker
            style={styles.inputDate}
            date={finalDate}
            mode="date"
            placeholder="Data final"
            format="YYYY-MM-DD"
            minDate="1990-01-01"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: styles.datePickerIcon,
              dateInput: styles.datePickerInput
            }}
            onDateChange={(value) => {setFinalDate(value)}}
          />
        </View>

        <Text style={generalStyles.textBlueTitle}>Situação</Text>
        <Picker
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
            selectedValue={status}>
            <Picker.Item label="Aguardando" value="waiting" />
            <Picker.Item label="Processando" value="processing" />
            <Picker.Item label="Aprovado" value="approved" />
            <Picker.Item label="Cancelado" value="cancelled" />
            <Picker.Item label="Compensado" value="completed" />
            <Picker.Item label="Estornado" value="refunded" />
            <Picker.Item label="Antecipado" value="anticipated" />
        </Picker>

        <View style={generalStyles.mainActionsView}>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={() => { navigation.navigate('Home') }} text='Agora não' />
          </View>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={filter}  text='Filtrar' />
          </View>
        </View>
        <View>
          {payments && (<Text style={generalStyles.textBlueTitle}>Resultados:</Text>)}
          {payments && payments.length > 0 && (
            <FlatList
              data={payments}
              renderItem={({ item }) => <PaymentListItem data={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          )}

          {payments && payments.length === 0 && (
            <Text style={styles.textEmpty}>Nenhum pagamento encontrado</Text>
          )}
        </View>

      </ScrollView>
  );
};
