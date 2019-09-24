import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
  Button,
} from 'react-native';

export default class Home extends Component {

    _irParaAdocao = () => {
        this.props.navigation.navigate('Adocao');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 2, justifyContent: 'center', marginTop: 20}}>
                <Text style={styles.title}>iPet</Text>
                </View>
                <View style={{flex: 4, justifyContent: 'center'}}>
                <TouchableHighlight style={styles.button} onPress={() => {this._irParaAdocao()}} >
                    <Text style={styles.text}>ADOÇÃO</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.text}>DOAÇÃO</Text>
                </TouchableHighlight>
                </View>
                <View style={styles.viewImage}>
                <Image source={require('../../imgs/patas.png')} style={styles.image} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 60,
    fontFamily: 'GROBOLD',
  },
  button: {
    backgroundColor: '#2fb7a7',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    flex: 3,
    //padding: 30,
    //marginBottom: 50
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    //width: 500
  },
});