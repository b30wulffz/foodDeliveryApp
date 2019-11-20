import React, { useDebugValue } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import OnBoardingScreen from "../screens/OnBoardingScreen";
import HomeNavigator from "./HomeNavigator";
import AuthScreen from "../screens/AuthScreen";
import FaqScreen from "../screens/FaqScreen";
import PlansScreen from "../screens/FaqYesScreen";

const FaqNavigator = createStackNavigator({
  Faq: {
    screen: FaqScreen,
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  },
  Plans: {
    screen: PlansScreen,
    navigationOptions: {
      header: null
    }
  }
});

const MainNavigator = createSwitchNavigator({
  OnBoarding: {
    screen: OnBoardingScreen
  },
  Auth: {
    screen: AuthScreen
  },
  Faq: {
    screen: FaqNavigator
  },
  Home: {
    screen: HomeNavigator
  }
});

export default createAppContainer(MainNavigator);
