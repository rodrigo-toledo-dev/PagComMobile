import React, { Component } from 'react';
import {Text, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { MaskService } from 'react-native-masked-text';
import moment from "moment";
import 'moment/locale/pt-br';
import styles from './styles';
import {Content, List, ListItem, Left, Body, Right } from 'native-base';

export default class DepositListItem extends Component {

  constructor(props) {
    super(props);
    moment.locale('pt-BR');
    console.tron.log(moment(props.data.due_on).format('dddd'))
  }

  quantity = () => {
    return <Text>{this.props.data.quantity}</Text>;
  }

  deposit = () => {
    return <Text>Depósitos</Text>;
  }

  amount = () => {

    const value = MaskService.toMask('money', parseFloat(this.props.data.amount), {
      unit: 'R$',
      separator: ',',
      delimiter: '.',
    });

    return <Text>{value}</Text>;

  }

  status = () => {

    let status = this.props.data.status;

    if(status == 'scheduled'){
      return <Text>Agendado</Text>;
    }else if(status == 'completed'){
      return <Text>Completo</Text>;
    }

  }

  dateMonth = () => {
    const month = moment(this.props.data.due_on).format('dddd')
    return <Text>{month}</Text>
  }

  dateDay = () => {
    const day = moment(this.props.data.due_on).format('DD')
    return <Text>{day}</Text>
  }

  openDepositDetails = () => {

    // return Actions.depositDetails({due_on: this.props.data.due_on});

  }

  render() {
    return (
        <View>
          <Content>
            <List>
              <ListItem avatar style={styles.list} button={true} onPress={() => { this.openDepositDetails() }} noBorder>
                <Left style={{flexDirection: 'column'}}>
                  <Text style={styles.dateDay}>
                    {this.dateDay()}
                  </Text>
                  <Text style={styles.dateMonth}>
                    {this.dateMonth()}
                  </Text>
                </Left>
                <Body>
                  <Text style={styles.status}>
                    {this.amount()}
                  </Text>
                  <Text style={styles.amount}>
                    {this.status()}
                  </Text>
                </Body>
                <Right style={styles.depositsColumn}>
                  <Text style={styles.quantity}>
                    {this.quantity()}
                  </Text>
                  <Text style={styles.deposit}>
                    {this.deposit()}
                  </Text>
                </Right>
              </ListItem>
            </List>
          </Content>
          <View style={styles.viewLine}/>

        </View>
    );
  }
};
