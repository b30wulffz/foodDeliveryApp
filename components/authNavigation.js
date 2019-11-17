import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Loading from './firstLogin/onBoardingComponent';
import Authenticate from './firstLogin/authComponent';
import Home from './home/home';

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: {screen: Authenticate} });

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Home' : 'AuthLoading');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default createAppContainer(createSwitchNavigator(
  {
    Route: AuthLoadingScreen,
    AuthLoading: Loading,
    Auth : Authenticate,
    Home : Home,

    // App: AppStack,
    // Auth: AuthStack,
  },
  {
    initialRouteName: 'Route',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});