import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {RESTAURANTS} from '../data/restaurantData';
import RestaurantTile from '../components/RestaurantTile';
import SideBox from '../components/sidebox';

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
              isRestaurantMeal: true,
            },
          });
        }}
        style={styles.container}
      />
    );
  };

  const [box, boxChange] = useState(false);
  const [text, changeText] = useState('');

  return (
    <View style={styles.height100}>
      <View style={styles.head}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            style={styles.searchText}
            onFocus={() => {
              props.navigation.navigate({
                routeName: 'SearchBox',
                params: {change: changeText},
              });
            }}
            value={text}
          />
          <Icon
            name="search"
            color="rgba(0,0,0,0.7)"
            size={25}
            style={styles.searchIcon}
          />
        </View>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => {
            boxChange(true);
          }}>
          <Icon name="filter-list" size={25} />
        </TouchableOpacity>
      </View>
      <SideBox
        visible={box}
        close={() => {
          boxChange(false);
        }}
      />
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
  head: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.7)',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  searchText: {
    width: '85%',
    margin: 0,
  },
  searchIcon: {
    margin: 0,
    width: '10%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  listData: {
    padding: 10,
  },
  height100: {
    height: '100%',
  },
  modalButton: {
    width: 40,
    backgroundColor: 'rgb(221, 244, 253)',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 5,
    justifyContent: 'center',
  },
});

export default RestaurantsScreen;
