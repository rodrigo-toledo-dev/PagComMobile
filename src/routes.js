import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ForgotPasswordScreen from './screens/ForgotPassword';
import SignUpScreen from './screens/SignUp';
import EditAccountScreen from './screens/EditAccount';
import LoginScreen from './screens/Login';
import MenuOptionsScreen from './screens/MenuOptions';
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
    initialRouteName: 'Login',
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
