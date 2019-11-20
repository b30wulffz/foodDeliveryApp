import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  ActivityIndicator
} from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

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
  function handleEmChange(event) {
    // props.data.uEmail.setEmail(event.target.value);
  }

  function handlePwChange(event) {
    // props.data.uPass.setPass(event.target.value);
  }

  return (
    <>
      <View style={styles.inputOuter}>
        <TextInput
          placeholder="Email Id"
          // value={props.data.uEmail.email}
          style={styles.input}
          // onChange={handleEmChange}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          // value={props.data.uPass.pass}
          // onChange={handlePwChange}
        />
        <TouchableOpacity style={{ alignItems: "flex-end", width: "100%" }}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => props.navigation.navigate("Faq")}
      >
        <Text style={{ fontSize: 15 }}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

const Auth = props => {
  const [isLogin, setLogin] = useState(true);
  const loginBackground = isLogin ? styles.activeButton : {};
  const signupBackground = isLogin ? {} : styles.activeButton;

  const [success, setSuccess] = useState(false);

  //   if (!success) {
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

      {/* {isLogin ? <LogIn setSuccess={setSuccess} data={props} /> : <SignUp />} */}
      {isLogin ? (
        <LogIn setSuccess={setSuccess} navigation={props.navigation} />
      ) : (
        <SignUp />
      )}
    </View>
  );
  //   } else {
  //     return <Faq />;
  //   }
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
    alignItems: "center"
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
    borderRadius: 50,
    elevation: 2
  }
});

// export default Auth;

// class Logic extends React.Component {
// const [email, setEmail] = useState("");
// const [pass, setPass] = useState("");

// _bootstrapAsync = async () => {
//   const userToken = await AsyncStorage.getItem("userToken");
//   if (userToken) {
//     props.navigation.navigate(Home);
//   } else {
//     props.navigation.navigate(Auth);
//     // props.navigation.navigate(Auth, {
//     //   uEmail: { email, setEmail },
//     //   uPass: { pass, setPass }
//     // });
//   }
//   // (userToken ? Home : Auth, {uEmail: {email, setEmail}});
// };

// useEffect(()=>_bootstrapAsync(), []);

//   constructor(props){
//     super(props);
//     props.navigation.navigate(Auth);
//   }

//   render(){
//     return (
//       <View>
//         <ActivityIndicator />
//       </View>
//     );
//   }
// };

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       // Route: Logic,
//       Auth: Auth,
//       Home: Home
//     },
//     {
//       initialRouteName: "Auth"
//     }
//   )
// );

export default Auth;
