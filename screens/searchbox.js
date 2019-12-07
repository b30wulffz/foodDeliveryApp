import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dishes, Restaurants} from '../data/names';

const ListData = ({name, list, back}) => {
  if (list.length === 0) {
    return <></>;
  } else {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.headingStyle}>{name}</Text>
        {list.map((data, index) => {
          return (
            <TouchableOpacity
              style={styles.list}
              key={index}
              onPress={() => back(data)}>
              <Text style={styles.text}>{data}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
};

const SearchBox = props => {
  const change = props.navigation.state.params.change;
  const [name, changeName] = useState('');

  const back = data => {
    change(data);
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Icon
          name="search"
          color="rgba(0,0,0,0.7)"
          size={25}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search for Restaurant, Dishes"
          style={styles.searchText}
          autoFocus
          onChangeText={word => {
            change(word);
            changeName(word);
          }}
        />
      </View>
      <ListData
        name="Restaurants"
        list={Restaurants.filter(rName => {
          return (
            name !== '' && rName.toLowerCase().includes(name.toLowerCase())
          );
        })}
        back={back}
      />
      <ListData
        name="Dishes"
        list={Dishes.filter(rName => {
          return (
            name !== '' && rName.toLowerCase().includes(name.toLowerCase())
          );
        })}
        back={back}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '92%',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
  },
  searchBox: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width: '95%',
    borderRadius: 20,
    alignSelf: 'center',
  },
  searchText: {
    width: '85%',
    margin: 0,
  },
  searchIcon: {
    margin: 0,
    width: '10%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  list: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 8,
  },
  text: {
    width: '100%',
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
  },
  listContainer: {
    width: '100%',
  },
  headingStyle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'rgba(221, 244, 253, 0.7)',
  },
});

export default SearchBox;
