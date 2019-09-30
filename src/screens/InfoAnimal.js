import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import Header from '../components/Header';


export default class InfoAnimal extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: null,
    headerLeft: <Header onPress={() => navigation.goBack()} name="Adoção" />,
  });

  render() {
    return (
      <View>
        <Text>INFO ANIMAL</Text>
      </View>
    );
  }
}
