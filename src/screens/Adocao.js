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

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: null,
    headerLeft: 
      <View style={{margin: 10, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{marginTop: 5}}name={'chevron-left'} size={20}  onPress={ () => { navigation.goBack() }} />
        <Text style={{fontSize: 20, marginLeft: 10, /*fontWeight: 'bold'*/}}>Home</Text>
      </View>
  });

  state = {
    data: [
      {id: '1', name: 'Luna', age: 2, time: 'anos', description: 'bla bla bla bla'},
      {id: '2', name: 'Laila', age: 5, time: 'meses', description: 'bla bla bla bla'},
      {id: '3', name: 'Rambo', age: 6, time: 'meses', description: 'bla bla bla bla'},
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'flex-start', alignItems:'center', marginTop: 20, marginBottom: 30}}>
          <Text style={styles.title}>Adotar</Text>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <View style={styles.viewImage}>
                  <Text style={{color: 'black'}}>Imagem do animal aqui</Text>
                </View>
                <View style={{/*backgroundColor: 'green',*/ justifyContent: 'center', marginLeft: 10}}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.age} {item.time}</Text>
                  <Text style={{fontSize: 18}}>{item.description}</Text>
                </View>
              </View>
            );
          }}
        />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  title: {
    color: '#2fb7a7',
    fontSize: 54,
    fontFamily: 'GROBOLD',
  },
  viewImage: {
    height: 100,
    width: 100,
    borderColor: 'purple',
    borderWidth: 3,
    justifyContent: 'center',
    borderRadius: 20
  },
  item: {
    alignItems: "center",
    //backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  },
});