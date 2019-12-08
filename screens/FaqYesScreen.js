import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const DayData = ({day, state, updateState}) => {
  const backStyle = {backgroundColor: state ? 'rgb(221, 244, 253)' : '#fff'};
  var thisRef;

  const updateRef = ref => {
    thisRef = ref;
  };

  return (
    <Swipeable
      ref={updateRef}
      rightThreshold={50}
      renderRightActions={() => {
        return (
          <View style={styles.del}>
            <Icon2
              name="delete"
              style={styles.delIcon}
              size={24}
              onPress={() => {
                thisRef.close();
                updateState && updateState(false);
              }}
            />
          </View>
        );
      }}
      containerStyle={[styles.dayContainer, backStyle]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateState(true);
        }}>
        <Text style={styles.buttonText}>{day}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

const App = props => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const initialDataState = [false, false, false, false, false, false, false];

  const [dataState, updateState] = useState(initialDataState);
  const [reset, updateReset] = useState(false);

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={reset}>
        <View style={styles.modalBack}>
          <View style={styles.modal}>
            <View style={styles.upperRow}>
              <Text style={styles.font18}>Reset Everything?</Text>
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  updateReset(false);
                }}
              />
            </View>
            <View style={styles.rbuttons}>
              <TouchableOpacity
                onPress={() => {
                  updateState(initialDataState);
                  updateReset(false);
                }}>
                <Text style={[styles.rbutton, styles.nbutton]}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  updateReset(false);
                }}>
                <Text style={[styles.rbutton, styles.pbutton]}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.reset}
        onPress={() => {
          updateReset(true);
        }}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Plan your weekly food</Text>

        <View>
          {days.map((day, index) => {
            return (
              <DayData
                day={day}
                key={index}
                state={dataState[index]}
                updateState={state => {
                  const newState = [...dataState];
                  newState[index] = state;
                  updateState(newState);
                }}
              />
            );
          })}
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.sbutton}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dayContainer: {
    width: 300,
    marginVertical: 5,
    borderColor: 'rgb(221, 244, 253)',
    borderRadius: 50,
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  button: {
    width: 250,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlignVertical: 'center',
    fontSize: 17,
  },
  del: {
    height: 50,
    position: 'absolute',
    backgroundColor: '#dfdfdf',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delIcon: {
    color: '#4f4f4f',
    fontWeight: '800',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  title: {
    paddingBottom: 35,
    alignSelf: 'center',
    color: 'rgb(145, 145, 145)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  sbutton: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: 'rgb(221, 244, 253)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 2,
  },
  rbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  pbutton: {
    backgroundColor: 'rgb(221, 244, 253)',
  },
  nbutton: {
    backgroundColor: '#fff',
  },
  rbuttons: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  upperRow: {
    width: '100%',
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
  modalBack: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modal: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 100,
    backgroundColor: '#fff',
    width: 330,
    borderRadius: 10,
    alignItems: 'center',
  },
  font17: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
  },
  reset: {
    alignSelf: 'flex-end',
    paddingRight: 30,
    color: 'rgb(145, 145, 145)',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
