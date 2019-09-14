import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ForgotPasswordScreen from './screens/ForgotPassword';
import SignUpScreen from './screens/SignUp';
import EditAccountScreen from './screens/EditAccount';
import LoginScreen from './screens/Login';
import SendMoneyScreen from './screens/SendMoney';
import WithDrawMoneyScreen from './screens/WithDrawMoney';
import RequestMoneyScreen from './screens/RequestMoney';
import HomeScreen from './screens/Home';

// common components
import SignedHeader from './components/SignedHeader';
import AnonymousHeader from './components/AnonymousHeader';


export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    RequestMoney: {
      screen: RequestMoneyScreen
    },
    SendMoney: {
      screen: SendMoneyScreen
    },
    WithDrawMoney: {
      screen: WithDrawMoneyScreen
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
