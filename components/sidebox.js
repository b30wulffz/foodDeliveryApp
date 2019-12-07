import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Modal,
} from 'react-native';
import CustomCheckBox from './checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

const cuisines = [
  'American',
  'Indian',
  'North Indian',
  'South Indian',
  'Punjabi',
  'Continental',
  'Chinese',
  'Italian',
  'Andhra',
];

const SideBox = ({close, visible}) => {
  const [veg, updateVeg] = useState(true);
  const [list, changeList] = useState(false);
  const [maxHeight] = useState(new Animated.Value(0));
  const vegBackground = veg ? styles.activeButton : {};
  const nonvegBackground = veg ? {} : styles.activeButton;
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.modalBack}>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => {
            close();
          }}>
          <Icon name="close" size={25} />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.switchStyle}>
            <TouchableOpacity
              style={[styles.aVegButtonStyle, nonvegBackground]}
              onPress={() => {
                updateVeg(false);
              }}>
              <Text style={styles.font15}>Non-Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.aVegButtonStyle, vegBackground]}
              onPress={() => {
                updateVeg(true);
              }}>
              <Text style={styles.font15}>Veg</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Delivery Time</Text>
            <CustomCheckBox size={25} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Ratings</Text>
            <CustomCheckBox size={25} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Cuisines</Text>
            <Icon
              name={list ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={30}
              onPress={() => {
                changeList(!list);
                if (!list) {
                  Animated.timing(maxHeight, {
                    toValue: 1000,
                    easing: Easing.ease,
                    duration: 300,
                  }).start();
                } else {
                  Animated.timing(maxHeight, {
                    toValue: 0,
                    easing: Easing.ease,
                    duration: 300,
                  }).start();
                }
              }}
            />
          </View>
          <Animated.View
            style={[
              styles.list,
              {
                maxHeight: maxHeight.interpolate({
                  inputRange: [0, 1000],
                  outputRange: [0, 1000],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            {cuisines.map((name, index) => {
              return (
                <View style={styles.listItem} key={index}>
                  <Text style={styles.listItemText}>{name}</Text>
                  <CustomCheckBox size={25} />
                </View>
              );
            })}
          </Animated.View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              close();
            }}>
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SideBox;

const styles = StyleSheet.create({
  modalBack: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingTop: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
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
  list: {
    width: '90%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  listItem: {
    width: '100%',
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: 16,
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.8)',
  },
  container: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    alignItems: 'center',
    width: '65%',
    elevation: 1,
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowOffset: {x: 10, y: 10},
    shadowRadius: 10,
    borderBottomLeftRadius: 20,
    flexBasis: 'auto',
  },
  item: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  itemText: {
    fontSize: 18,
    textAlignVertical: 'center',
  },
  font15: {
    fontSize: 15,
  },
  switchStyle: {
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: 'rgb(221, 244, 253)',
    marginBottom: 15,
  },
  activeButton: {
    backgroundColor: 'rgba(221, 244, 253, 0.6)',
  },
  aVegButtonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 50,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowRadius: 3,
    shadowOffset: {x: 3, y: 3},
    backgroundColor: 'rgb(221, 244, 253)',
  },
});
