import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnBoardingScreen from './components/onBoardingComponent';

export default function App() {
  return (
    <OnBoardingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
