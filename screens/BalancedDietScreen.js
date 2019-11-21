import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BalancedDietScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Suggested balanced diet today.</Text>

      <View>
        <View>
          <View>
            <Text>Nonveg</Text>
            <Text>Veg</Text>
          </View>
          <View>
            <Text>Reset</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>Done</Text>
      </View>
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

export default BalancedDietScreen;
