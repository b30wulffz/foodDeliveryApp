import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { RESTAURANTS } from "../data/restaurantData";

const RestaurantMealsScreen = props => {
  const DATA = RESTAURANTS.find(
    item => item.id == props.navigation.getParam("restaurantId")
  );
  const MEALS = DATA.meals;

  const renderGridItem = itemData => {
    return <Text>{itemData.item.id}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text>Restaurant Meal Screen</Text>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={MEALS}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

RestaurantMealsScreen.navigationOptions = navData => {
  // console.log(navData);
  const data = RESTAURANTS.find(
    item => item.id == navData.navigation.getParam("restaurantId")
  );

  return {
    headerTitle: data.name
    // headerLeft: (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName="ios-menu"
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>
    // )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RestaurantMealsScreen;
