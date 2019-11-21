import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const SignUp = () => {
  return (
    <>
      <View style={styles.inputOuter}>
        <TextInput placeholder="Email Id" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.font15}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

const LogIn = props => {
  return (
    <>
      <View style={styles.inputOuter}>
        <TextInput placeholder="Email Id" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.floatEnd}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => props.navigation.navigate('Faq')}>
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
});

export default Auth;
