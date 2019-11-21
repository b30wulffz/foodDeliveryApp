import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const MealItem = props => {
  return (
    <View style={{...props.style, ...styles.card}}>
      <TouchableOpacity onPress={props.onSelect}>
        <View style={styles.imageContainer}>
          <ImageBackground source={{uri: props.image}} style={styles.image}>
            <Text style={styles.imgText}>{props.discount}% off</Text>
          </ImageBackground>
        </View>
        <View style={styles.data}>
          <Text style={styles.restName}>{props.name}</Text>
          <Text style={styles.restDesc}>{props.desc}</Text>
          <View style={styles.baseLine}>
            <Text>
              <Icon name="star" size={14} />
              {props.ratings}
            </Text>
            <Text>{props.time} min</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '46%',
    height: 260,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  imgText: {
    color: 'white',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    textAlign: 'right',
    fontWeight: '700',
  },
  data: {
    padding: 8,
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
  },
  restName: {
    fontSize: 16,
  },
  restDesc: {
    fontSize: 12,
  },
  baseLine: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default MealItem;
