import React, { Component } from "react";
import { Text, View } from "react-native";
import { MaskService } from 'react-native-masked-text';
import styles from "./styles.js";
import generalStyles from '../../generalStyles';

export default class TransactionListItem extends Component {

  value = () => {
    const value = MaskService.toMask('money', parseFloat(this.props.data.amount), {
      unit: 'R$',
      separator: ',',
      delimiter: '.',
    });

    return (
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.value}>
        {value}
      </Text>
    );
  };
  transactionType = () => {
    let transactionType = this.props.data.transaction_type;
    return (
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.transaction}>
        {transactionType}
      </Text>
    );
  };

  render() {
    return (
      <View style={styles.root}>
        <View avatar style={styles.list} noBorder>
          <View style={generalStyles.mainActionsView}>
            <Text> {this.value()}</Text>
            <Text>{this.transactionType()}</Text>
          </View>
          <View style={styles.viewLine} />
        </View>
      </View>
    );
  }
}
