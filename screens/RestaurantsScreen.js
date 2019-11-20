import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  TextInput
} from "react-native";
import { SearchBar } from "react-native-elements";

import { RESTAURANTS } from "../data/restaurantData";
import RestaurantTile from "../components/RestaurantTile";

const RestaurantsScreen = props => {
  const [searchText, setSearchText] = useState("");

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
            routeName: "RestaurantMeals",
            params: {
              restaurantId: itemData.item.id
            }
          });
        }}
        style={styles.container}
      />
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <View>
        {/* <SearchBar
          searchIcon={{ size: 24 }}
          onChangeText={text => setX(text)}
          onClear={text => setX("")}
          placeholder="Type Here..."
          value={x}
          containerStyle={{
            width: "70%",
            // backgroundColor: "white",
            paddingHorizontal: 20,
            paddingVertical: 1,
            borderWidth: 1,
            borderRadius: 30,
            borderColor: "black"
          }}
          inputContainerStyle={{ backgroundColor: "white", padding: 0}}
          inputStyle={{fontSize: 10}}
        /> */}
        {/* <TextInput
          placeholder="Search for restaurant, dish"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.searchBox}
        /> */}
      </View>
      <View style={styles.listData}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={RESTAURANTS}
          renderItem={renderGridItem}
          numColumns={2}
        />
      </View>
    </View>

    //     {/* <RestaurantTile
    //     name={}
    //   /> */}

    //     {/* <Button
    //   title={"Click Here"}
    //   onPress={() => {
    //     props.navigation.push("RestaurantMeals");
    //   }}
    // /> */}
    //   {/* </View> */}
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    // backgroundColor: "#f00",
    width: "100%",
    justifyContent: "center",
    margin: 10
  },
  searchBox: {
    height: 50,
    width: "60%"
  },
  listData: {
    padding: 10
  }
  // scrollContainer: {
  //   flex: 1,
  //   backgroundColor: "#0f0",
  //   width:'100%'
  // },
  // restList: {
  //   justifyContent: "space-evenly",
  //   alignItems: 'center',
  //   backgroundColor: "#00f",
  // }
});

export default RestaurantsScreen;
