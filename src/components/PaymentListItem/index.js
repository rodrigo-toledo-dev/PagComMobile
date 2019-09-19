import React, { Component } from 'react';
import {Text, View , Image } from 'react-native';
import {List, ListItem, Left, Right, Body, Content} from 'native-base';
import { MaskService } from 'react-native-masked-text';
import styles from './styles';

class PaymentListItem extends Component {

  constructor(props) {
    super(props);
  }

  debitSub = () => {
    debitSub = this.props.data.credit === true ? 'Crédito' : 'Débito'
    return <Text ellipsizeMode='tail' numberOfLines={1} style={styles.debit}>{debitSub}</Text>;
  }

  brand = () => {
    brand = this.props.data.credit_card_brand === 'MASTERCARD' ? require('../../images/ic_master.png') : require('../../images/ic_visa.png');
    return <Image source={brand} style={styles.image}/>
  }

  value = () => {
    const amount = MaskService.toMask('money', parseFloat(this.props.data.amount), {
      unit: 'R$',
      separator: ',',
      delimiter: '.',
    });

    return <Text ellipsizeMode='tail' numberOfLines={1} style={styles.value}>{amount}</Text>;
  }

  render() {
    return (
      <View style={styles.root}>
        <Content>
          <List>
            <ListItem avatar style={styles.list} noBorder>
              <Left style={{flexDirection: 'column'}}>
                {this.brand()}
                {this.debitSub()}
              </Left>
              <Body />
              <Right>
                <Text>
                {this.value()}
                </Text>
              </Right>
            </ListItem>
            <View style={styles.viewLine}/>
          </List>

        </Content>
      </View>
      );
    }

  };

  export default PaymentListItem;
