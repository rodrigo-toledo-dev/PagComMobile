import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ForgotPasswordScreen from './screens/ForgotPassword';
import SignUpScreen from './screens/SignUp';
import EditAccountScreen from './screens/EditAccount';
import LoginScreen from './screens/Login';
import MenuOptionsScreen from './screens/MenuOptions';
import MenuAntecipateScreen from './screens/MenuAntecipate';
import MenuPaymentsScreen from './screens/MenuPayments';
import MenuDepositsScreen from './screens/MenuDeposits';
import SendMoneyScreen from './screens/SendMoney';
import RequestMoneyScreen from './screens/RequestMoney';
import QrCodePaymentScreen from './screens/QrCodePayment';
import HomeScreen from './screens/Home';

// common components
import SignedHeader from './components/SignedHeader';
import AnonymousHeader from './components/AnonymousHeader';


export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    MenuOptions: {
      screen: MenuOptionsScreen
    },
    MenuAntecipate: {
      screen: MenuAntecipateScreen
    },
    MenuPayments: {
      screen: MenuPaymentsScreen
    },
    MenuDeposits: {
      screen: MenuDepositsScreen
    },
    RequestMoney: {
      screen: RequestMoneyScreen
    },
    SendMoney: {
      screen: SendMoneyScreen
    },
    QrCodePayment: {
      screen: QrCodePaymentScreen
    },
    EditAccount: {
      screen: EditAccountScreen
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: <AnonymousHeader />,
      },
    }
  },
  {
    initialRouteName: 'RequestMoney',
    defaultNavigationOptions: {
      headerTitle: <SignedHeader />,
      headerBackTitle: null,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },

    },

  }
  )
);
