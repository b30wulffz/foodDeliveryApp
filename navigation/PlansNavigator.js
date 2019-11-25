import {createStackNavigator} from 'react-navigation-stack';

import PlansScreen from '../screens/PlansScreen';
import PlanFoodScreen from '../screens/FaqYesScreen';
import UpComingNotificationsScreen from '../screens/UpcomingNotificationsScreens';
import PlanHistoryScreen from '../screens/PlanHistoryScreen';
import PlanNotificationTimeScreen from '../screens/PlanNotificationTimeScreen';

import Colors from '../constants/Colors';

const PlansNavigator = createStackNavigator(
  {
    PlansDefault: {
      screen: PlansScreen,
    },
    PlanFood: {
      screen: PlanFoodScreen,
    },
    UpComingNotifications: {
      screen: UpComingNotificationsScreen,
      navigationOptions: {
        title: 'Upcoming Notifications',
      },
    },
    PlanHistory: {
      screen: PlanHistoryScreen,
    },
    NotificationTime: {
      screen: PlanNotificationTimeScreen,
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        color: Colors.secondary,
      },
    },
  },
);

export default PlansNavigator;
