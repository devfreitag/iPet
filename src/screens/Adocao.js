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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: null,
    headerLeft: (
      <View style={{margin: 10, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
        <Icon
          style={{marginTop: 5}}
          name={'chevron-left'}
          size={20}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{fontSize: 20, marginLeft: 10}}>Home</Text>
      </View>
    )
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Adotar</Text>
        </View>
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
                  <TouchableHighlight style={styles.button}>
                    <Text style={styles.textButton}> Mais informações</Text>
                  </TouchableHighlight>
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
  textButton: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    color: '#2fb7a7',
    fontSize: 54,
    fontFamily: 'GROBOLD',
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
  viewTitle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
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
  button: {
    backgroundColor: '#2fb7a7',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
