import React, {useState} from 'react';

import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {locations} from '../data/locationName';

const App = ({update, visible}) => {
  const [location, setLocation] = useState('');

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBack}>
        <View style={styles.modal}>
          <View style={styles.upperRow}>
            <Text style={styles.font18}>Location</Text>
            <Icon
              name="close"
              size={25}
              onPress={() => {
                update('');
              }}
            />
          </View>
          <View style={styles.header}>
            <Icon name="search" size={25} />
            <TextInput
              style={styles.input}
              onChangeText={setLocation}
              value={location}
              placeholder="Choose Your Location"
            />
          </View>
          {location === '' ? (
            <View style={styles.item}>
              <Icon name="my-location" size={22} />
              <TouchableHighlight
                underlayColor="rgba(221, 244, 253, 0.8)"
                onPress={() => {
                  update('Sri City');
                }}
                style={styles.button}>
                <Text style={styles.itemText}>My Location</Text>
              </TouchableHighlight>
            </View>
          ) : (
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator>
              {locations
                .filter(name => {
                  return name.toLowerCase().includes(location.toLowerCase());
                })
                .map((name, index) => {
                  return (
                    <View style={styles.item} key={index}>
                      <TouchableHighlight
                        underlayColor="rgba(221, 244, 253, 0.8)"
                        onPress={() => {
                          update(name);
                        }}
                        style={styles.button}>
                        <Text style={styles.itemText}>{name}</Text>
                      </TouchableHighlight>
                    </View>
                  );
                })}
            </ScrollView>
          )}
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
  header: {
    width: '90%',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
  },
  input: {
    padding: 1,
    width: '85%',
    color: 'rgba(0,0,0,0.9)',
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
    width: '100%',
    marginVertical: 5,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    width: '100%',
    fontSize: 16,
    color: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 10,
  },
  upperRow: {
    width: '90%',
    marginVertical: 20,
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
    width: '80%',
    paddingVertical: 6,
    borderRadius: 20,
  },
  scroll: {
    marginVertical: 20,
    maxHeight: 200,
    width: '90%',
  },
});

export default App;
