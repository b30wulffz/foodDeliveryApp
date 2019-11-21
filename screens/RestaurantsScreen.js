import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {RESTAURANTS} from '../data/restaurantData';
import RestaurantTile from '../components/RestaurantTile';

const RestaurantsScreen = props => {
  const renderGridItem = itemData => {
    return (
      <RestaurantTile
        id={itemData.item.id}
        image={itemData.item.img}
        discount={itemData.item.discount}
        name={itemData.item.name}
        desc={itemData.item.description}
        ratings={itemData.item.ratings}
        time={itemData.item.time}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'RestaurantMeals',
            params: {
              restaurantId: itemData.item.id,
            },
          });
        }}
        style={styles.container}
      />
    );
  };

  return (
    <View style={styles.height100}>
      <View />
      <View style={styles.listData}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={RESTAURANTS}
          renderItem={renderGridItem}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    margin: 10,
  },
  searchBox: {
    height: 50,
    width: '60%',
  },
  listData: {
    padding: 10,
  },
  height100: {
    height: '100%',
  },
});

export default RestaurantsScreen;
