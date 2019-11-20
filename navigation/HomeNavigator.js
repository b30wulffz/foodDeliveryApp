import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FoodieNavigator from "./FoodieNavigator";
import PlansScreen from "../screens/PlansScreen";
import AccountScreen from "../screens/AccountScreen";
import CartScreen from "../screens/CartScreen";

import Colors from "../constants/Colors";

const homeNavigator = createBottomTabNavigator(
  {
    Foodie: {
      screen: FoodieNavigator,
      navigationOptions: {
        title: "Foodie",
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons name="food" size={25} color={tintColor} />
          );
        }
      }
    },
    Plans: {
      screen: PlansScreen,
      navigationOptions: {
        title: "Plans",
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons
              name="wallet-giftcard"
              size={25}
              color={tintColor}
            />
          );
        }
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: "Account",
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons
              name="account-circle"
              size={25}
              color={tintColor}
            />
          );
        }
      }
    },
    CartScreen: {
      screen: CartScreen,
      navigationOptions: {
        title: "Cart",
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons name="cart" size={25} color={tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: Colors.primary
      },
      activeTintColor: Colors.active
    }
  }
);

export default homeNavigator;
