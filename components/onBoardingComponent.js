import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "somethun",
    title: "Easy Food Delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ",
    image: require("../assets/images/onBoard1.png"),
    // backgroundColor: "#59b2ab"
  },
  {
    key: "somethun-dos",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/images/onBoard2.jpg"),
    // backgroundColor: "#febe29"
  },
  {
    key: "somethun1",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/images/onBoard3.jpg"),
    // backgroundColor: "#22bcb5"
  }
];

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide} backgroundColor={item.backgroundColor}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // this.setState({ showRealApp: true });
    setShowRealApp(true);
  };

  if (showRealApp) {
    return (
      <View>
        <Text>hi</Text>
      </View>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
        showSkipButton
      />
    );
  }
};

export default App;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    //   paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 26,
    color: "rgb(145, 145, 145)",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    color: "rgb(53, 56, 57)",
    fontSize: 15,
    textAlign: "center"
  },
  image: {
    width: "90%",
    height: 250,
    resizeMode: "contain"
  }
});
