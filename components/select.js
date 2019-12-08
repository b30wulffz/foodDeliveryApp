import React, {useState, useEffect} from 'react';

import {View, Text, TouchableHighlight, Modal, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Location from './location';
import Time from './time';
import Food from './cuisines';

const App = ({visible, name, update, values}) => {
  const [time, setTime] = useState(values.time);
  const [food, setFood] = useState(values.food);
  const [location, setLocation] = useState(values.location);

  useEffect(() => {
    setFood(values.food);
    setLocation(values.location);
    setTime(values.time);
  }, [values]);

  const [vTime, setVTime] = useState(false);
  const [vFood, setVFood] = useState(false);
  const [vLocation, setVLocation] = useState(false);
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBack}>
        <View style={styles.modal}>
          <View style={styles.upperRow}>
            <Text style={styles.font18}>{name}</Text>
            <Icon
              name="close"
              size={25}
              onPress={() => {
                update({food: food, location: location, time: time});
              }}
            />
          </View>
          <View style={styles.item}>
            <TouchableHighlight
              onPress={() => {
                setVFood(true);
              }}>
              <Text style={styles.font18}>{food || 'Choose Food'}</Text>
            </TouchableHighlight>
            <Icon name="food" size={35} color={food ? '#73a5c6' : '#afafaf'} />
          </View>
          <View style={styles.item}>
            <TouchableHighlight
              onPress={() => {
                setVTime(true);
              }}>
              <Text style={styles.font18}>{time || 'Time'}</Text>
            </TouchableHighlight>
            <Icon
              name="clock-outline"
              size={35}
              color={time ? '#73a5c6' : '#afafaf'}
            />
          </View>
          <View style={styles.item}>
            <TouchableHighlight
              onPress={() => {
                setVLocation(true);
              }}>
              <Text style={styles.font18}>{location || 'Location'}</Text>
            </TouchableHighlight>
            <Icon
              name="map-marker"
              size={35}
              color={location ? '#73a5c6' : '#afafaf'}
            />
          </View>
          <TouchableHighlight
            style={styles.aButton}
            onPress={() => {
              update({food: food, location: location, time: time});
            }}
            underlayColor="transparent">
            <Text style={styles.font18}>Done</Text>
          </TouchableHighlight>
          <Food
            visible={vFood}
            update={data => {
              if (data !== '') {
                setFood(data);
              }
              setVFood(false);
            }}
          />
          <Location
            visible={vLocation}
            update={data => {
              if (data !== '') {
                setLocation(data);
              }
              setVLocation(false);
            }}
          />
          <Time
            visible={vTime}
            update={data => {
              if (data !== '') {
                setTime(data);
              }
              setVTime(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBack: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    marginVertical: 15,
    alignItems: 'flex-start',
  },
  modal: {
    alignSelf: 'center',
    paddingVertical: 5,
    marginTop: 100,
    backgroundColor: '#fff',
    width: 330,
    borderRadius: 10,
    alignItems: 'center',
  },
  item: {
    width: '85%',
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
  },
  upperRow: {
    width: '100%',
    marginVertical: 15,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  font18: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  button: {
    width: '85%',
    paddingVertical: 5,
  },
  aButton: {
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 7,
    paddingHorizontal: 40,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowRadius: 3,
    shadowOffset: {x: 3, y: 3},
    backgroundColor: 'rgb(221, 244, 253)',
  },
});

export default App;
