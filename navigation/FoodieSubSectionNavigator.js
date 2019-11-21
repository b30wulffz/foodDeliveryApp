import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import RestaurantsScreen from '../screens/RestaurantsScreen';
import HomeMadeFoodScreen from '../screens/HomeMadeFoodScreen';
import BalancedDietScreen from '../screens/BalancedDietScreen';

import Colors from '../constants/Colors';

const FoodieSubSection = createMaterialTopTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreen,
      navigationOptions: {
        title: 'Restaurants',
      },
    },
    HomeMade: {
      screen: HomeMadeFoodScreen,
      navigationOptions: {
        title: 'Homemade food',
      },
    },
    BalancedDiet: {
      screen: BalancedDietScreen,
      navigationOptions: {
        title: 'Balanced diet',
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#ffffff',
      },
      labelStyle: {
        fontSize: 13,
        color: Colors.secondary,
      },
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: Colors.primary,
      },
    },
  },
);

export default FoodieSubSection;
