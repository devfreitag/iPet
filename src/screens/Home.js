import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import {ButtonRoutes} from '../components/Buttons';

export default class Home extends Component {
  _irParaAdocao = () => {
    this.props.navigation.navigate('Adocao');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2, justifyContent: 'center', marginTop: 20}}>
          <Text style={styles.title}>iPet</Text>
        </View>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <ButtonRoutes onPress={() => this._irParaAdocao()} name='ADOÇÃO'/>
          <ButtonRoutes onPress={() => this._irParaAdocao()} name='DOAÇÃO'/>
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
  title: {
    color: 'black',
    fontSize: 60,
    fontFamily: 'GROBOLD',
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