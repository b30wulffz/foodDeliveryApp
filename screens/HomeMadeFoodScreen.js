import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeMadeFoodScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Home Made Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeMadeFoodScreen;
