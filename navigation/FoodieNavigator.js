import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

import FoodieSubSectionNavigator from "./FoodieSubSectionNavigator";
import RestaurantMeals from "../screens/RestaurantMealsScreen";

import Colors from "../constants/Colors";

const FoodieNavigator = createStackNavigator(
  {
    FoodieHome: {
      screen: FoodieSubSectionNavigator,
      navigationOptions: {
        headerTitle: "Foodie",
        headerRight: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="location-on" onPress={() => {}} />
          </HeaderButtons>
        )
      }
    },
    RestaurantMeals: {
      screen: RestaurantMeals
    }
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTitleStyle: {
        color: Colors.secondary,
      }
    }
  }
);

export default FoodieNavigator;
