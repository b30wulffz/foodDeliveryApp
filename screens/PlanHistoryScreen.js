import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PlanHistoryScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Plan History Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlanHistoryScreen;
