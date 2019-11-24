import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import COLORS from '../constants/Colors';

const NotificationTile = props => {
  return (
    <View style={styles.container}>
      <View style={styles.dateTime}>
        <Text style={styles.bold}>{props.day}</Text>
        <View style={{...styles.dateTime, ...styles.dateTimeRight}}>
          <Text>{props.time}</Text>
          <Text>{props.date}</Text>
        </View>
      </View>
      <View style={styles.partTwo}>
        <View style={styles.orderData}>
          <Text style={styles.data}>Order</Text>
          <Text style={styles.data}>Suggested</Text>
        </View>
        <View style={styles.orderDetails}>
          <Text style={styles.data}>{props.orderName}</Text>
          <Text style={styles.data}>{props.vendorName}</Text>
          <Text style={styles.data}>$ {props.price}</Text>
          <TouchableOpacity style={{...styles.button, ...styles.data}}>
            <Text>Order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.updateDetails}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.linkColor}>Choose restaurant</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.linkColor}>Update order</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.linkColor}>Cancel order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  dateTimeRight: {
    width: '50%',
  },
  partTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  orderData: {
    flex: 0.5,
  },
  orderDetails: {
    flex: 1,
  },
  updateDetails: {
    borderLeftColor: '#EAEAEA',
    borderLeftWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  linkColor: {
    fontWeight: 'bold',
    color: '#BBE5FC',
  },
  button: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    elevation: 3,
    width: 130,
  },
  data: {
    marginVertical: 5,
  },
});

export default NotificationTile;
