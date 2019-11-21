import React, {useEffect} from 'react';

import {View, Image, Text, StyleSheet} from 'react-native';

const splashImage = require('../assets/splash.png');

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('OnBoarding');
    }, 5000);
  });

  return (
    <View style={styles.conatiner}>
      <Image source={splashImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Copyright &copy; Foodie</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 6,
    fontSize: 20,
  },
});

export default SplashScreen;
