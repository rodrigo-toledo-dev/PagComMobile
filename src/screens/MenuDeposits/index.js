import React, { useState, useEffect } from 'react';

import { View, Text, Alert, ActivityIndicator, ScrollView, FlatList, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from "native-base";

import DepositListItem from '../../components/DepositListItem';
import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import DatePicker from 'react-native-datepicker';
import moment from "moment";

import constantsAPI from '../../constantsApi';

import styles from './styles'
import generalStyles from '../../generalStyles';
import dateTimeStyles from '../../dateTimeStyles';

export default function MenuDepositsScreen({ navigation }) {
  let [show, setShow] = useState(false);

  let [initialDate, setInitialDate] = useState();
  let [finalDate, setFinalDate] = useState('');

  let [status, setStatus] = useState('');

  let [deposits, setDeposits] = useState(false);

  useEffect(() => {
    setShow(true)
    getDeposits();
  },[]);

  getDeposits = () => {
    AsyncStorage.getItem("token").then(token => {
      let url = constantsAPI.BASE_URL + constantsAPI.DAILY_DEPOSITS;

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
            console.tron.log("response error ao tentar obter Deposits:");
            console.tron.log(response.error);
          } else {
            console.tron.log('Resultados atuais Deposits');
            console.tron.log(response);
            setDeposits(response);
          }
          setShow(false)
        })
        .catch(() => {
          console.tron.log("get response error Deposits");
          setShow(false)
        })
        .done();
    });
  }

  handleInitialDate = datetime => {
    const date = moment(datetime).format("DD/MM/YYYY");

    setInitialDateIsVisible(false);
    setInitialDateInput(date)
    setInitialDate(date.split("/").reverse().join("-"));
  };

  resetInitialDate = () => {
    setInitialDateIsVisible(false);
    setInitialDateInput('')
    setInitialDate('')
  }

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

  handleStatus = (status) => {
    setEnable(status)
  };

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
          constantsAPI.DAILY_DEPOSITS;
          // let url =
          // constantsAPI.BASE_URL +
          // constantsAPI.PAYMENT_FILTER +
          // `?payments={"start_date":"${initialDateToFilter}","end_date":"${finalDateToFilter}","status":"${statusToFilter}"}`;

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
            setDeposits(response);
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
    <View style={generalStyles.container}>
      <ScrollView>

        <Text style={generalStyles.textBlueTitle}>Extratos de todos os depósitos</Text>
        <Text style={generalStyles.textGray}>Inicialmente os depósitos já serão listados mas você pode filtrar para obter melhores resultados</Text>

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

        <View style={dateTimeStyles.dateView}>
          <DatePicker
            style={dateTimeStyles.inputDate}
            date={initialDate}
            mode="date"
            placeholder="Data Inicial"
            format="YYYY-MM-DD"
            minDate="1990-01-01"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: dateTimeStyles.datePickerIcon,
              dateInput: dateTimeStyles.datePickerInput
            }}
            onDateChange={(value) => {setInitialDate(value)}}
          />

          <DatePicker
            style={dateTimeStyles.inputDate}
            date={finalDate}
            mode="date"
            placeholder="Data final"
            format="YYYY-MM-DD"
            minDate="1990-01-01"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: dateTimeStyles.datePickerIcon,
              dateInput: dateTimeStyles.datePickerInput
            }}
            onDateChange={(value) => {setFinalDate(value)}}
          />
        </View>

        <Text style={generalStyles.textBlueTitle}>Situação</Text>
        {Platform.OS === 'ios' && (
          <Picker
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
            selectedValue={status}>
            <Picker.Item label="Selecione uma situação" value="" />
            <Picker.Item label="Agendado" value="scheduled" />
            <Picker.Item label="Completo" value="completed" />
          </Picker>
        )}

        {Platform.OS != 'ios' && (
          <View style={styles.androidSelectInput}>
            <Picker
              onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
              selectedValue={status}>
              <Picker.Item label="Selecione uma situação" value="" />
              <Picker.Item label="Agendado" value="scheduled" />
              <Picker.Item label="Completo" value="completed" />
            </Picker>
          </View>
        )}

        <View style={generalStyles.mainActionsView}>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={() => { navigation.navigate('Home') }} text='Agora não' />
          </View>
          <View style={styles.footerButtonContainer}>
            <ButtonLinearGradient onPress={filter}  text='Filtrar' />
          </View>
        </View>
        <View>
          {deposits && (<Text style={generalStyles.textBlueTitle}>Resultados:</Text>)}
          {deposits && deposits.length > 0 && (
            <FlatList
              data={deposits}
              renderItem={({ item }) => <DepositListItem data={item} />}
              keyExtractor={item => item.due_on}
            />
          )}

          {deposits && deposits.length === 0 && (
            <Text style={styles.textEmpty}>Nenhum depósito encontrado</Text>
          )}
        </View>

      </ScrollView>

    </View>
  );
};


