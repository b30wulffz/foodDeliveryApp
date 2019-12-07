import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Meal from './CartMeal';

function cartOpen(anim) {
  Animated.timing(anim, {
    toValue: 10,
    easing: Easing.ease,
    duration: 300,
  }).start();
}

function cartClose(anim) {
  Animated.timing(anim, {
    toValue: 0,
    easing: Easing.ease,
    duration: 300,
  }).start();
}

function updateCostState(cost, costFunc, cart) {
  costFunc(cost);
  if (cost > 0) {
    cartOpen(cart);
  } else {
    cartClose(cart);
  }
}

import {RESTAURANTS} from '../data/restaurantData';
import {HOMEMADEFOOD} from '../data/homemadeFoodData';
import CustomCheckBox from '../components/checkbox';

const RestaurantMealsScreen = props => {
  const MODELDATA = props.navigation.getParam('isRestaurantMeal')
    ? RESTAURANTS
    : HOMEMADEFOOD;
  const DATA = MODELDATA.find(
    item => item.id === props.navigation.getParam('restaurantId'),
  );
  const MEALS = DATA.meals;

  const [cost, updateCost] = useState(0);
  const [cartHeight] = useState(new Animated.Value(0));
  const [itemList, updateList] = useState([]);

  const renderGridItem = itemData => {
    return (
      <Meal
        data={itemData.item}
        update={change => {
          updateCostState(cost + change, updateCost, cartHeight);
        }}
        add={name => {
          const list = [...itemList];
          list.push(name);
          updateList(list);
        }}
        remove={name => {
          const list = itemList.filter(val => val !== name);
          updateList(list);
        }}
      />
    );
  };

  const menuChoice = [
    'Main Course',
    'Breads',
    'Curry',
    'Biryani',
    'Desserts',
    'Soup',
    'Starters',
  ];

  const [menuOpen, menuState] = useState(false);

  return (
    <>
      <View style={styles.header}>
        <Icon
          style={styles.headerIcon}
          name="arrow-back"
          size={30}
          color="#000"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>{DATA.name}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image source={{uri: DATA.img}} style={styles.bannerImage} />
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            colors={[
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.3)',
              'rgba(255, 255, 255, 0)',
            ]}
            locations={[0.18, 0.27, 0.5, 1]}
            style={styles.gradient}
          />
          <View style={styles.bannerHead}>
            <Text style={styles.fontHead}>
              {props.navigation.getParam('isRestaurantMeal')
                ? 'Restaurant'
                : 'This home service'}{' '}
              can deliver in {DATA.time} mins
            </Text>
            <Text style={styles.fontHead}>
              <Icon name="star" /> {DATA.ratings}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              menuState(!menuOpen);
            }}>
            <Text>Menu</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={MEALS}
          renderItem={renderGridItem}
          numColumns={1}
        />
        <Modal transparent={true} visible={menuOpen} animationType="fade">
          <View style={styles.menuBack}>
            <View style={styles.menu}>
              <Text style={styles.menuHead}>Menu</Text>
              {menuChoice.map((choice, index) => {
                return (
                  <View style={styles.menuItem} key={index}>
                    <Text style={styles.menuItemText}>{choice}</Text>
                    <CustomCheckBox size={26} />
                  </View>
                );
              })}
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => {
                  menuState(false);
                }}>
                <Text>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Animated.View
          style={[
            styles.cart,
            {
              height: cartHeight.interpolate({
                inputRange: [0, 10],
                outputRange: ['0%', '10%'],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <View style={styles.cartText}>
            <Text style={styles.cartTextItem}>
              {'\u0024'} {cost}
            </Text>
            <Text
              style={styles.cartTextItem}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {itemList.length + ' items: ' + itemList.join(', ')}
            </Text>
          </View>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartFont}>Go To </Text>
            <Icon name="shopping-cart" size={20} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '94%',
    top: '-4%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  header: {
    height: '10%',
    paddingVertical: '4%',
    backgroundColor: '#e0f4ff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  headerIcon: {
    color: '#000',
    paddingHorizontal: 10,
  },
  headerText: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  banner: {
    width: '100%',
    height: '35%',
  },
  bannerImage: {
    height: '100%',
    width: '100%',
  },
  bannerHead: {
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    height: 40,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontHead: {
    fontSize: 15,
    paddingHorizontal: 5,
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: 150,
    height: 35,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.7,
    elevation: 5,
    borderRadius: 25,
    alignItems: 'center',
  },
  menuBack: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  menuItem: {
    width: '95%',
    marginVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuHead: {
    fontSize: 18,
    textAlign: 'center',
    width: '80%',
    marginVertical: 1,
  },
  menuItemText: {
    color: 'rgba(0,0,0,0.6)',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  menuButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 50,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowRadius: 3,
    shadowOffset: {x: 3, y: 3},
    backgroundColor: 'rgb(221, 244, 253)',
  },
  menu: {
    padding: 10,
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 20,
    position: 'absolute',
    top: '25%',
    right: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5a5a5a',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 30,
      width: 30,
    },
    elevation: 5,
  },
  cart: {
    width: '100%',
    backgroundColor: '#e0f4ff',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cartText: {
    height: '100%',
    width: '65%',
    padding: 10,
  },
  cartTextItem: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'normal',
  },
  cartButton: {
    backgroundColor: 'white',
    width: '31%',
    marginHorizontal: '2%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOffset: {
      x: 7,
      y: 7,
    },
    flexDirection: 'row',
  },
  cartFont: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RestaurantMealsScreen;
