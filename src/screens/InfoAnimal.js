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
import Title from '../components/Title';
import Contact from '../components/Contact';

export default class InfoAnimal extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: null,
    headerLeft: <Header onPress={() => navigation.goBack()} name="Adoção" />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Title />
        <View style={styles.info}>
          <Text style={styles.textTitleInfo}>Nome do dog - Idade</Text>
          <Text style={styles.textInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <View>
            <Contact />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  info: {
    marginHorizontal: 20,
  },
  textTitleInfo: {
    fontSize: 20,
  },
  textInfo: {
    fontSize: 16,
    marginTop: 25,
  }
});
