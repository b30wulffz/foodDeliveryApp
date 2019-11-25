import React, {useState} from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Meal = ({update, data, add, remove}) => {
  const [count, updateCount] = useState(0);

  return (
    <View style={styles.cover}>
      <View style={styles.image}>
        <Image source={{uri: data.img}} style={styles.imageImage} />
        <Text style={styles.imageText}>{data.discount} % off</Text>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.name}>{data.dishName}</Text>
        <View style={styles.typeList}>
          <View
            style={[
              styles.typeIndicator,
              data.isVeg ? styles.typeVeg : styles.typeNonVeg,
            ]}
          />
          <Text style={styles.typeName}>Starters</Text>
        </View>
        <Text style={styles.price}>
          {'\u0024'} {data.price}
        </Text>
      </View>
      <View style={styles.counter}>
        <TouchableHighlight
          style={styles.counterButtons}
          onPress={() => {
            if (count > 0) {
              updateCount(count - 1);
              update(-1 * data.price);
              if (count === 1) {
                remove(data.dishName);
              }
            }
          }}
          disabled={count <= 0}>
          <Icon name="minus" size={15} color="#000" />
        </TouchableHighlight>
        <Text style={styles.counterText}>{count}</Text>
        <TouchableHighlight
          style={styles.counterButtons}
          onPress={() => {
            updateCount(count + 1);
            update(data.price);
            if (count === 0) {
              add(data.dishName);
            }
          }}>
          <Icon name="plus" size={15} color="#000" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    width: '96%',
    height: 80,
    flexDirection: 'row',
    marginHorizontal: '2%',
    marginVertical: 7,
    borderColor: '#1a1a1a',
    borderWidth: 0.2,
  },
  image: {
    width: '35%',
    height: '100%',
  },
  imageImage: {
    height: '100%',
    width: '100%',
  },
  imageText: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    fontSize: 13,
    height: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    color: '#4a4a4a',
  },
  name: {
    height: 25,
    color: '#3f3f3f',
    width: '100%',
    fontSize: 17,
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  typeList: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  typeIndicator: {
    marginVertical: 2,
    height: 9,
    width: 9,
    borderRadius: 9,
    overflow: 'hidden',
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    elevation: 3,
  },
  typeVeg: {backgroundColor: '#008200'},
  typeNonVeg: {backgroundColor: '#964122'},
  typeName: {
    top: -3,
    height: '100%',
    color: '#4a4a4a',
    fontSize: 13,
  },
  textContent: {
    width: '40%',
    paddingLeft: '2%',
    height: '100%',
    justifyContent: 'space-between',
  },
  price: {
    color: '#4a4a4a',
    height: 30,
    padding: 5,
    fontSize: 17,
  },
  counter: {
    backgroundColor: '#e0f4ff',
    width: '23%',
    height: 33,
    marginVertical: 7,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  counterButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '100%',
  },
  counterText: {
    width: '40%',
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default Meal;
