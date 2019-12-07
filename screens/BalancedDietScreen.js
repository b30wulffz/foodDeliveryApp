import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Options = ({name, selected, changeSelected}) => {
  const style = selected ? styles.selectedButton : {};
  return (
    <View style={[styles.optionButton, style]}>
      <Text style={styles.font20}>{name}</Text>
      <TouchableOpacity
        style={styles.buttonWidth}
        onPress={() => {
          changeSelected(!selected);
        }}>
        <Icon name={selected ? 'minus' : 'plus'} size={25} color="#4f4f4f" />
      </TouchableOpacity>
    </View>
  );
};

class BalancedDiet extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 5,
      offset: new Animated.Value(0),
      height: 2,
      scroll: new Animated.Value(0),
      veg: true,
      names: [
        'Rice',
        'Chicken Curry',
        'Roti',
        'Curd',
        'Orange Juice',
        'Butter Naan',
        'Paneer Butter Masala',
        'Dosa',
        'Kadhai Paneer',
        'Chole Batore',
        'Naan Kulche',
      ],
      selected: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
    this.scrollerStyle = {
      height: '20%',
      width: '200%',
      left: '-50%',
      backgroundColor: '#bbe5fc',
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
      transform: [{translateY: this.state.scroll}],
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.clearSelected = this.clearSelected.bind(this);
  }

  updateSelected(index, selected) {
    const select = [...this.state.selected];
    select[index] = selected;
    this.setState({...this.state, selected: select});
  }

  clearSelected() {
    const select = this.state.selected.map(() => false);
    this.setState({...this.state, selected: select});
  }

  render() {
    this.scrollerStyle.transform = [{translateY: this.state.scroll}];
    const vegBackground = this.state.veg ? styles.activeButton : {};
    const nonvegBackground = this.state.veg ? {} : styles.activeButton;

    return (
      <View style={styles.fullheight}>
        <Text style={styles.text}>Suggested Balance Diet Today</Text>

        <View style={styles.upperButtons}>
          <View style={styles.switchStyle}>
            <TouchableOpacity
              style={[styles.aVegButtonStyle, nonvegBackground]}
              onPress={() => {
                this.setState({...this.state, veg: false});
              }}>
              <Text style={styles.font15}>Non-Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.aVegButtonStyle, vegBackground]}
              onPress={() => {
                this.setState({...this.state, veg: true});
              }}>
              <Text style={styles.font15}>Veg</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.resetText}>
            <TouchableOpacity
              onPress={() => {
                this.state.names.map((name, index) => {
                  this.clearSelected();
                });
              }}>
              <Text style={styles.font15}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scroll}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollview}
            onLayout={({
              nativeEvent: {
                layout: {height},
              },
            }) => {
              this.setState({...this.state, height: height});
            }}
            onContentSizeChange={(width, height) => {
              this.setState({...this.state, total: height});
            }}
            onScroll={({
              nativeEvent: {
                contentOffset: {y},
              },
            }) => {
              this.state.offset.setValue(y);
              const scroll = Animated.multiply(
                Animated.divide(
                  this.state.offset,
                  Animated.subtract(this.state.total, this.state.height),
                ),
                0.8 * this.state.height,
              );
              this.setState({
                ...this.state,
                offset: this.state.offset,
                scroll: scroll,
              });
            }}>
            {this.state.names.map((name, index) => (
              <Options
                name={name}
                key={index}
                selected={this.state.selected[index]}
                changeSelected={state => {
                  const id = index;
                  this.updateSelected(id, state);
                }}
              />
            ))}
          </ScrollView>
          <View style={styles.scrollbar}>
            <Animated.View style={this.scrollerStyle} />
          </View>
        </View>
        <TouchableOpacity style={styles.authButton}>
          <Text style={styles.font15}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BalancedDiet;

const styles = StyleSheet.create({
  fullheight: {
    height: '100%',
    alignItems: 'center',
    width: '85%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  text: {fontSize: 20, paddingTop: 30},
  scroll: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%',
    flexDirection: 'row',
    width: '100%',
  },
  scrollview: {
    height: '100%',
    width: '99%',
  },
  scrollbar: {
    backgroundColor: 'rgba(210, 210, 210, 0.6)',
    height: '100%',
    width: '1%',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgb(145, 145, 145)',
    top: 40,
  },
  aVegButtonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
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
  activeButton: {
    backgroundColor: 'rgba(221, 244, 253, 0.6)',
  },
  resetText: {
    width: '20%',
    paddingVertical: 10,
  },
  upperButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authButton: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    marginVertical: 30,
    backgroundColor: 'rgb(221, 244, 253)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 2,
  },
  optionButton: {
    borderRadius: 50,
    justifyContent: 'space-between',
    borderColor: 'rgb(221, 244, 253)',
    borderWidth: 2,
    margin: 8,
    flexDirection: 'row',
  },
  buttonWidth: {
    width: 35,
    paddingRight: 10,
    paddingVertical: 5,
  },
  font20: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    marginLeft: 20,
  },
  selectedButton: {
    backgroundColor: 'rgb(221, 244, 253)',
  },
});
