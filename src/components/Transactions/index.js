import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  FlatList
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles";
import generalStyles from '../../generalStyles';
import constantsAPI from "../../constantsApi";
import TransactionListItem from '../TransactionListItem';

export default function Transactions() {
  let [show, setShow] = useState(true);
  let [list, setList] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("token").then(token => {
      let url = constantsAPI.BASE_URL + constantsAPI.EXTRACT;

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
            console.log("response erro Transactions (transacoes):");
            console.log(response.error);

            setShow(false);
          } else {
            console.tron.log('Transacoes atuais')
            console.tron.log(response.transactions)
            setList(response.transactions);
            setShow(false);
          }
        })
        .catch(() => {
          setShow(false);
        })
        .done();
    });
  }, []);

  return (
    <View>
      {show && (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center" }}
          color={"#125a80"}
          animating={show}
          size="large"
        />
      )}
      {list.length > 0 && (
        <View>
          <View style={generalStyles.mainActionsView}>
            <Text style={styles.value}>Valor</Text>
            <Text style={styles.transaction}>Transação</Text>
          </View>
          <View style={styles.viewLine} />

          <View style={styles.contentViewRow}>
            <FlatList
              data={list}
              renderItem={({ item }) => <TransactionListItem data={item} />}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>
      )}
      {list.length === 0 && (
        <View style={styles.contentViewRow}>
          <View>
            <Image
              source={require("../../images/home/ic_money.png")}
              style={styles.iconMenu}
            />
            <Text style={styles.textOne}>Você não tem transações</Text>
            <Text style={styles.textTwo}>Vá em frente e faça sua</Text>
            <Text style={styles.textThree}>
              primeira transferência :D
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}
