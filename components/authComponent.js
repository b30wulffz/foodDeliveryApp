import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Platform
} from "react-native";

import Faq from "./faq";
// import Faq from './faq2';

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
        <Text style={{ fontSize: 15 }}>Sign Up</Text>
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
        <TouchableOpacity style={{ alignItems: "flex-end", width: "100%" }}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => props.setSuccess(true)}
      >
        <Text style={{ fontSize: 15 }}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

const Auth = () => {
  const [isLogin, setLogin] = useState(true);
  const loginBackground = isLogin ? styles.activeButton : {};
  const signupBackground = isLogin ? {} : styles.activeButton;

  const [success, setSuccess] = useState(false);

  if (!success) {
    return (
      <View style={styles.outerCover}>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 20,
            flexDirection: "row",
            borderColor: "rgb(221, 244, 253)"
          }}
        >
          <TouchableOpacity
            style={[
              {
                paddingHorizontal: 35,
                paddingVertical: 8,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20
              },
              signupBackground
            ]}
            onPress={() => {
              setLogin(false);
            }}
          >
            <Text style={{ fontSize: 15 }}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                paddingHorizontal: 35,
                paddingVertical: 8,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20
              },
              loginBackground
            ]}
            onPress={() => {
              setLogin(true);
            }}
          >
            <Text style={{ fontSize: 15 }}>Login</Text>
          </TouchableOpacity>
        </View>

        {isLogin ? <LogIn setSuccess={setSuccess} /> : <SignUp />}
      </View>
    );
  } else {
    return <Faq />;
  }
};

const styles = StyleSheet.create({
  outerCover: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  inputOuter: {
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
    // paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  input: {
    height: 60,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.5)",
    padding: 3,
    marginVertical: 13
  },
  activeButton: {
    backgroundColor: "rgba(221, 244, 253, 0.6)"
  },
  authButton: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: "rgb(221, 244, 253)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  }
});

export default Auth;
