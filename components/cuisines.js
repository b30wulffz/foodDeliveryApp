import React from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Dishes} from '../data/names';

const App = ({update, visible}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBack}>
        <View style={styles.modal}>
          <View style={styles.upperRow}>
            <Text style={styles.font18}>Choose Food</Text>
            <Icon
              name="close"
              size={25}
              onPress={() => {
                update('');
              }}
            />
          </View>
          <ScrollView style={styles.scroll} showsVerticalScrollIndicator>
            {Dishes.map((name, index) => {
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
    width: '100%',
    marginTop: 20,
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
    width: '100%',
    paddingVertical: 6,
  },
  scroll: {
    marginVertical: 10,
    maxHeight: 400,
    width: '85%',
  },
});

export default App;
