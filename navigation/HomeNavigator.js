import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodieNavigator from './FoodieNavigator';
import PlansNavigator from './PlansNavigator';
import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';

import Colors from '../constants/Colors';

const homeNavigator = createBottomTabNavigator(
  {
    Foodie: {
      screen: FoodieNavigator,
      navigationOptions: {
        title: 'Foodie',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="food" size={25} color={tintColor} />;
        },
      },
    },
    Plans: {
      screen: PlansNavigator,
      navigationOptions: {
        title: 'Plans',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="wallet-giftcard" size={25} color={tintColor} />;
        },
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Account',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="account-circle" size={25} color={tintColor} />;
        },
      },
    },
    CartScreen: {
      screen: CartScreen,
      navigationOptions: {
        title: 'Cart',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="cart" size={25} color={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: Colors.primary,
      },
      activeTintColor: Colors.active,
    },
  },
);

export default homeNavigator;
