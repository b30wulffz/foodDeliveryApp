import React from "react";
import OnBoardingScreen from "./components/onBoardingComponent";
import Constants from 'expo-constants';
import {View} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        flex: 1
      }}
    >
      <OnBoardingScreen />
    </View>
  );
}
