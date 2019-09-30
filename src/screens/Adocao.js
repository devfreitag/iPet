import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import {ButtonInfo} from '../components/Buttons';

export default class Home extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: null,
    headerLeft: <Header onPress={() => navigation.goBack()} name="Home" />,
  });

  state = {
    data: [
      {
        id: '1',
        name: 'Luna',
        age: 2,
        time: 'anos',
        description: 'bla bla bla bla',
      },
      {
        id: '2',
        name: 'Laila',
        age: 5,
        time: 'meses',
        description: 'bla bla bla bla',
      },
      {
        id: '3',
        name: 'Rambo',
        age: 6,
        time: 'meses',
        description: 'bla bla bla bla',
      },
      {
        id: '4',
        name: 'Zuca',
        age: 4,
        time: 'anos',
        description: 'bla bla bla bla',
      },
    ],
  };

  _irParaInfoAnimal = () => {
    this.props.navigation.navigate('InfoAnimal');
  };

  render() {
    return (
      <View style={styles.container}>
        <Title />
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.item}>
                <View style={styles.viewImage}>
                  <Image
                    source={require('../../imgs/dog1.jpg')}
                    style={styles.image}
                  />
                </View>
                <View style={styles.viewData}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>
                    {item.age} {item.time}
                  </Text>
                  <Text style={styles.textDescription}>{item.description}</Text>
                  <ButtonInfo onPress={() => this._irParaInfoAnimal()} />
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  textDescription: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  viewImage: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    borderRadius: 20,
  },
  viewData: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  item: {
    alignItems: 'center',
    //backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
});
