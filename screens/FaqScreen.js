import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Faq = props => {
  return (
    <View style={styles.fullscreen}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          // color: "rgb(53, 56, 57)",
          color: "rgb(145, 145, 145)",
          top: 50
        }}
      >
        Would you like to plan your food ahead?
      </Text>

      <View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.push("Plans")}
        >
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text>Sure but later!</Text>
        </TouchableOpacity>
      </View>

      <Image
        style={styles.bottomImg}
        source={require("../assets/images/faq.jpg")}
      />
    </View>
  );
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
    backgroundColor: "rgba(221, 244, 253, 1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 2
  },
  bottomImg: {
    width: "80%",
    height: "30%",
    resizeMode: "contain"
  }
});
