import React, {useState} from 'react';

import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomCheckBox = ({onCheck, onUnCheck, checked, size}) => {
  const [status, changeStatus] = useState(checked);

  const boxSize = parseInt(0.7 * size, 10);

  return (
    <View style={[styles.container, {height: size, width: size}]}>
      <TouchableOpacity
        style={[
          status ? styles.checkedBox : styles.uncheckedBox,
          {height: boxSize, width: boxSize},
        ]}
        onPress={() => {
          changeStatus(true);
          if (typeof onCheck === 'function') {
            onCheck();
          }
        }}
      />
      {status && (
        <Icon
          name="check"
          style={styles.check}
          size={size}
          onPress={() => {
            changeStatus(false);
            if (typeof onCheck === 'function') {
              onUnCheck();
            }
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  uncheckedBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  checkedBox: {
    borderRadius: 5,
    backgroundColor: 'rgb(221, 244, 253)',
  },
  check: {
    width: '100%',
    height: '100%',
    textAlign: 'left',
    textAlignVertical: 'bottom',
    color: '#000',
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default CustomCheckBox;
