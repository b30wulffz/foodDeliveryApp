import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';

const Opt = props => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={{...styles.opt, ...props.style, ...styles.optContent}}>
        <Text style={styles.text}>{props.title}</Text>
        <Icon name="navigate-next" size={34} />
      </View>
    </TouchableOpacity>
  );
};

const PlansScreen = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/onBoard1.jpg')}
      />
      <View style={styles.options}>
        <Opt
          title="Plan your food"
          style={styles.typeA}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'PlanFood',
            });
          }}
        />
        <Opt
          title="Upcoming Notifications"
          style={styles.typeB}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'UpComingNotifications',
            });
          }}
        />
        <Opt
          title="History"
          style={styles.typeA}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'PlanHistory',
            });
          }}
        />
        <Opt
          title="Notification time"
          style={styles.typeB}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'NotificationTime',
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  image: {
    height:
      Dimensions.get('window').height / 3 < 200
        ? 200
        : Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  options: {
    width: '100%',
    justifyContent: 'center',
  },
  opt: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1,
    marginVertical: 10,
  },
  optContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
  typeA: {
    width: '80%',
  },
  typeB: {
    width: '90%',
  },
});

export default PlansScreen;
