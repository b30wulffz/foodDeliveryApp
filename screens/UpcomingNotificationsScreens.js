import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {ORDERS} from '../data/orderData';
import NotificationTile from '../components/NotificationTile.js';

const renderGridItem = itemData => {
  return (
    <NotificationTile
      id={itemData.item.id}
      orderName={itemData.item.orderName}
      vendorName={itemData.item.vendorName}
      price={itemData.item.price}
      day={itemData.item.day}
      time={itemData.item.time}
      date={itemData.item.date}
    />
  );
};

const UpcomingNotificationsScreen = props => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={ORDERS}
        renderItem={renderGridItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '90%',
  },
});

export default UpcomingNotificationsScreen;
