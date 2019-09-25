import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Ionicons } from '@expo/vector-icons';

import Auth from './authComponent';

const slides = [
  {
    key: "slide_1",
    title: "Easy Food Delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/onBoard1.png")
    // backgroundColor: "#59b2ab"
  },
  {
    key: "slide_2",
    title: "Easy Food Delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/onBoard2.jpg")
    // backgroundColor: "#febe29"
  },
  {
    key: "slide_3",
    title: "Easy Food Delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/onBoard3.jpg")
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

  const nextButton = () => {
    return (
      // <TouchableOpacity onPress={this.onPress}>
        <View style={styles.nextButton}>
          <Text>Next!!</Text>
        </View>
      // </TouchableOpacity>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(0, 0, 0, .6)"
          size={25}
          // style={{ backgroundColor: 'rgba(255, 247, 0, 0.2)', }}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(0, 0, 0, .9)"
          size={25}
          // style={{ backgroundColor: 'grey' }}
        />
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={styles.buttonSquare}>
        <Text>
          Skip
        </Text>
      </View>
    );
  };

  if (showRealApp) {
    return (
      <Auth />
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        activeDotStyle={{backgroundColor: 'rgba(0,0,0, .9)', marginHorizontal: 10}}	
        dotStyle={{backgroundColor: 'rgba(0,0,0,.2)', marginHorizontal: 10}}
        paginationStyle={{alignItems: 'center'}}
        showSkipButton={true}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        onDone={this._onDone}
        onSkip={this._onDone}
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
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSquare: {
    width: 60,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
