import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Picker, Switch} from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonRoutes} from '../components/Buttons';

export default class Doacao extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: null,
    headerLeft: <Header onPress={() => navigation.goBack()} name="Home" />,
  });

  state = {
    especie: '',
    genero: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Title name="DOAR" />
        <View style={styles.viewForm}>
          <TextInput style={styles.inputs} placeholder="Responsável" />
          <TextInput
            style={styles.inputs}
            placeholder="Telefone"
            keyboardType="phone-pad"
          />
          <View style={styles.inputs}>
            <Picker
              selectedValue={this.state.especie}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({especie: itemValue});
              }}>
              <Picker.Item label="Cão" value="cao" />
              <Picker.Item label="Gato" value="gato" />
            </Picker>
          </View>
          <TextInput
            style={styles.inputs}
            placeholder="Idade"
            keyboardType="number-pad"
          />
          <View style={styles.inputs}>
            <Picker
              selectedValue={this.state.genero}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({genero: itemValue});
              }}>
              <Picker.Item label="Macho" value="macho" />
              <Picker.Item label="Fêmea" value="femea" />
            </Picker>
          </View>
          <TextInput
            style={[styles.inputs, styles.boxArea]}
            placeholder="Características"
          />
          <View style={styles.viewIcon}>
            <Icon
              style={styles.icon}
              name={'camera'}
              size={40}
              //onPress={onPress}
            />
          </View>
          <View style={styles.btn}>
            <ButtonRoutes name="Cadastrar" />
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
    alignContent: 'center',
  },
  viewForm: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  inputs: {
    borderColor: '#2fb7a7',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    height: 40,
    justifyContent: 'center',
  },
  boxArea: {
    height: 80,
  },
  btn: {
    alignItems: 'center',
  },
});
