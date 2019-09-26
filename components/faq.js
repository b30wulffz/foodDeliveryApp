import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
  Dimensions
} from "react-native";
import Constants from "expo-constants";

import DateTime from './faq_yes';

const Faq = () => {
  const [select, setSelect] = useState(0);
  if (select === 0) {
    return (
      <View style={styles.fullscreen}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "rgb(53, 56, 57)",
            top: 50
          }}
        >
          Would you like to plan your food ahead?
        </Text>

        <View>
          <TouchableOpacity style={styles.buttons} onPress={()=>setSelect(1)}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text>Sure but later!</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.bottomImg}
          source={require("../assets/images/onBoard3.jpg")}
        />
      </View>
    );
  } else if (select === 1) {
    return (
      <DateTime/>
    )
  }
};

export default Faq;

const styles = StyleSheet.create({
  fullscreen: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  buttons: {
    paddingHorizontal: 70,
    paddingVertical: 10,
    // width: 300,
    // borderWidth: 1,
    // borderColor: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(221, 244, 253, 1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    // marginHorizontal: 100,
    // shadowRadius: 100
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 2
  },
  bottomImg: {
    // position: 'absolute',
    // bottom: 0,
    width: "80%",
    // height: Dimensions.get('window').height,
    height: "30%",
    resizeMode: "contain"
  }
});
