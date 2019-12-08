import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import User from '../model/user';

const SignUp = () => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [cpass, updateCPassword] = useState('');
  return (
    <>
      <View style={styles.inputOuter}>
        <TextInput
          value={email}
          placeholder="Email Id"
          style={styles.input}
          onChangeText={updateEmail}
        />
        <TextInput
          value={password}
          onChangeText={updatePassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={cpass}
          onChangeText={updateCPassword}
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => {
          if (email === '' || password === '') {
            Alert.alert('Error', 'Email or Password cannot be empty.');
          } else if (cpass !== password) {
            Alert.alert('Error', 'Passwords do not match.');
          } else if (User.addUser(email, password)) {
            Alert.alert('Success', 'New User Added.');
          } else {
            Alert.alert('Wrong Email', 'User already exists.');
          }
        }}>
        <Text style={styles.font15}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

const LogIn = props => {
  const [modalVisible, changeModalVisible] = useState(false);

  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  return (
    <>
      <View style={styles.inputOuter}>
        <TextInput
          placeholder="Email Id"
          style={styles.input}
          value={email}
          onChangeText={updateEmail}
        />
        <TextInput
          value={password}
          onChangeText={updatePassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.floatEnd}
          onPress={() => {
            changeModalVisible(true);
          }}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <View style={styles.innerHeader}>
              <Text style={styles.innerText}>Forgot Password</Text>
              <Icon
                size={25}
                style={styles.innerIcon}
                name="close"
                onPress={() => {
                  changeModalVisible(false);
                }}
              />
            </View>
            <TextInput
              placeholder="Your Email"
              style={styles.innerInput}
              placeholderTextColor="#000"
            />
            <TouchableOpacity
              style={styles.innerButton}
              onPress={() => {
                changeModalVisible(false);
              }}>
              <Text style={styles.font15}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => {
          if (User.verifyUser(email, password)) {
            props.navigation.navigate('Faq');
          } else {
            Alert.alert('Error', 'Wrong Email or Password.');
          }
        }}>
        <Text style={styles.font15}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

const Auth = props => {
  const [isLogin, setLogin] = useState(true);
  const loginBackground = isLogin ? styles.activeButton : {};
  const signupBackground = isLogin ? {} : styles.activeButton;

  return (
    <View style={styles.outerCover}>
      <View style={styles.switchCover}>
        <View style={styles.switchStyle}>
          <TouchableOpacity
            style={[styles.signUpButtonStyle, signupBackground]}
            onPress={() => {
              setLogin(false);
            }}>
            <Text style={styles.font15}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.loginButtonStyle, loginBackground]}
            onPress={() => {
              setLogin(true);
            }}>
            <Text style={styles.font15}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLogin ? <LogIn navigation={props.navigation} /> : <SignUp />}
    </View>
  );
};

const styles = StyleSheet.create({
  switchCover: {
    justifyContent: 'center',
    flexBasis: 150,
  },
  outerCover: {
    minHeight: 500,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputOuter: {
    flexGrow: 1,
    width: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.5)',
    padding: 3,
    marginVertical: 13,
  },
  activeButton: {
    backgroundColor: 'rgba(221, 244, 253, 0.6)',
  },
  authButton: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: 'rgb(221, 244, 253)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 2,
  },
  signUpButtonStyle: {
    paddingHorizontal: 35,
    paddingVertical: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  loginButtonStyle: {
    paddingHorizontal: 35,
    paddingVertical: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  font15: {
    fontSize: 15,
  },
  switchStyle: {
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: 'rgb(221, 244, 253)',
  },
  floatEnd: {
    alignItems: 'flex-end',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  innerButton: {
    paddingHorizontal: 90,
    paddingVertical: 8,
    backgroundColor: 'rgb(221, 244, 253)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 2,
  },
  innerInput: {
    height: 35,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.4)',
    marginVertical: 5,
  },
  innerHeader: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerText: {
    width: '70%',
    fontSize: 18,
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.7)',
  },
  innerIcon: {
    textAlign: 'right',
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.7)',
  },
  modal: {
    marginTop: 150,
    borderRadius: 10,
    height: 180,
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-evenly',
  },
});

export default Auth;
