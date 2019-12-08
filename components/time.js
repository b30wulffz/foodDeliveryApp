import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Hours = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
];

const Minutes = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
];

const App = ({update, visible}) => {
  const [hour, setHour] = useState('09');
  const [minute, setMinute] = useState('00');
  const [mList, setMList] = useState(false);
  const [hList, setHList] = useState(false);
  const [am, setOpp] = useState(true);

  const amColor = am ? 'rgba(221, 244, 253, 0.8)' : '#fff';
  const pmColor = am ? '#fff' : 'rgba(221, 244, 253, 0.8)';
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBack}>
        <View style={styles.modal}>
          <View style={styles.upperRow}>
            <Text style={styles.font18}>Choose Time</Text>
            <Icon
              name="close"
              size={25}
              onPress={() => {
                update('');
              }}
            />
          </View>
          <View style={styles.container}>
            <View>
              <View style={styles.data}>
                <Text style={styles.font18}>{hour}</Text>
                <Icon
                  name="keyboard-arrow-down"
                  size={25}
                  onPress={() => {
                    setHList(true);
                  }}
                />
              </View>
              {hList && (
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator>
                  {Hours.map((name, index) => {
                    return (
                      <TouchableHighlight
                        key={index}
                        underlayColor="rgba(221, 244, 253, 0.8)"
                        onPress={() => {
                          setHList(false);
                          setHour(name);
                        }}
                        style={styles.button}>
                        <Text style={styles.itemText}>{name}</Text>
                      </TouchableHighlight>
                    );
                  })}
                </ScrollView>
              )}
            </View>
            <View>
              <View style={styles.data}>
                <Text style={styles.font18}>{minute}</Text>
                <Icon
                  name="keyboard-arrow-down"
                  size={25}
                  onPress={() => {
                    setMList(true);
                  }}
                />
              </View>
              {mList && (
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator>
                  {Minutes.map((name, index) => {
                    return (
                      <TouchableHighlight
                        key={index}
                        underlayColor="rgba(221, 244, 253, 0.8)"
                        onPress={() => {
                          setMList(false);
                          setMinute(name);
                        }}
                        style={styles.button}>
                        <Text style={styles.itemText}>{name}</Text>
                      </TouchableHighlight>
                    );
                  })}
                </ScrollView>
              )}
            </View>
            <TouchableHighlight
              underlayColor="rgba(221, 244, 253, 0.8)"
              onPress={() => {
                setOpp(true);
              }}
              style={{
                backgroundColor: amColor,
              }}>
              <Text style={styles.font18}>am</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="rgba(221, 244, 253, 0.8)"
              onPress={() => {
                setOpp(false);
              }}
              style={{
                backgroundColor: pmColor,
              }}>
              <Text style={styles.font18}>pm</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.aButton}
            onPress={() => {
              update(hour + ':' + minute + ' ' + (am ? 'am' : 'pm'));
            }}>
            <Text style={styles.font18}>Done</Text>
          </TouchableHighlight>
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
  itemText: {
    width: '100%',
    fontSize: 18,
    color: 'rgba(0,0,0,0.8)',
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
  data: {
    width: 50,
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  font18: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  button: {
    width: '100%',
    paddingVertical: 4,
  },
  scroll: {
    width: 50,
    height: 100,
    backgroundColor: '#fff',
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
