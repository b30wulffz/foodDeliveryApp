import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import OnBoardingScreen from '../screens/OnBoardingScreen';
import HomeNavigator from './HomeNavigator';
import AuthScreen from '../screens/AuthScreen';
import FaqScreen from '../screens/FaqScreen';
import PlansScreen from '../screens/FaqYesScreen';
import SplashScreen from './SplashScreen';

const FaqNavigator = createStackNavigator({
  Faq: {
    screen: FaqScreen,
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
      },
    },
  },
  Plans: {
    screen: PlansScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createSwitchNavigator({
  Splash: {
    screen: SplashScreen,
  },
  OnBoarding: {
    screen: OnBoardingScreen,
  },
  Auth: {
    screen: AuthScreen,
  },
  Faq: {
    screen: FaqNavigator,
  },
  Home: {
    screen: HomeNavigator,
  },
});

export default createAppContainer(MainNavigator);
