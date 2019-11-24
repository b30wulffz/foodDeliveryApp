import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PlanNotificationTimeScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Plan Notification Time Screen</Text>
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

export default PlanNotificationTimeScreen;
