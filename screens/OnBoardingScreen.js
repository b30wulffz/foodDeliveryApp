import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';

const slides = [
  {
    key: 'slide_1',
    title: 'Plan your food ahead',
    text: 'Be overfed by planning your food ahead.',
    image: require('../assets/images/onBoard1.jpg'),
  },
  {
    key: 'slide_2',
    title: 'Balanced diet',
    text: 'Balance your life with our balanced diet.',
    image: require('../assets/images/onBoard2.png'),
  },
  {
    key: 'slide_3',
    title: 'Notifications',
    text:
      'Neglecting your health due to busy schedule?\nWe are here to notify your hunger.',
    image: require('../assets/images/onBoard3.png'),
  },
];

const App = props => {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide} backgroundColor={item.backgroundColor}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    props.navigation.navigate('Auth');
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(0, 0, 0, .6)"
          size={25}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(0, 0, 0, .9)" size={25} />
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={styles.buttonSquare}>
        <Text>Skip</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      slides={slides}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
      paginationStyle={styles.paginationStyle}
      showSkipButton={true}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      onDone={_onDone}
      onSkip={_onDone}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: 'rgb(145, 145, 145)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: 'rgb(53, 56, 57)',
    fontSize: 15,
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: 250,
    resizeMode: 'contain',
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
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    marginHorizontal: 10,
  },
  paginationStyle: {
    alignItems: 'center',
  },
  activeDotStyle: {
    backgroundColor: 'rgba(0,0,0,.9)',
    marginHorizontal: 10,
  },
});
