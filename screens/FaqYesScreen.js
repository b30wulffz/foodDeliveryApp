import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const App = props => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.reset}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Plan your weekly food</Text>

        <View>
          {days.map((day, index) => {
            return (
              <TouchableOpacity key={index}>
                <Text style={styles.button}>{day}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('Home')}> */}
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.sbutton}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 15,
    paddingLeft: 40,
    margin: 5,
    borderColor: 'rgb(221, 244, 253)',
    borderRadius: 50,
    borderWidth: 1,
    width: 300,
  },
  title: {
    paddingBottom: 35,
    alignSelf: 'center',
    color: 'rgb(145, 145, 145)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  sbutton: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: 'rgb(221, 244, 253)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 2,
  },
  reset: {
    alignSelf: 'flex-end',
    paddingRight: 30,
    color: 'rgb(145, 145, 145)',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
