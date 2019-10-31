import React, {Component} from 'react';
import {StyleSheet, View, Alert, TextInput, Picker} from 'react-native';
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
    dono: '',
    telefone: '',
    especie: '',
    idade: null,
    genero: '',
    caracteristicas: '',
  };

  handleSubmit = () => {
    Alert.alert("Cadastro realizado com sucesso! " + this.state.caracteristicas);
    this.props.navigation.navigate('Adocao');
  };

  handlePicture = () => {
    this.props.navigation.navigate('Camera');
  }

  render() {
    return (
      <View style={styles.container}>
        <Title name="DOAR" />
        <View style={styles.viewForm}>
          <TextInput
            value={this.state.dono}
            onChangeText={e => this.setState({dono: e})}
            style={styles.inputs}
            placeholder="Responsável" 
          />
          <TextInput
            value={this.state.telefone}
            onChangeText={e => this.setState({telefone: e})}
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
            value={this.state.idade}
            onChangeText={e => this.setState({idade: e})}
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
            value={this.state.caracteristicas}
            onChangeText={e => this.setState({caracteristicas: e})}
            style={[styles.inputs, styles.boxArea]}
            placeholder="Características"
          />
          <View style={styles.viewIcon}>
            <Icon
              style={styles.icon}
              name={'camera'}
              size={40}
              onPress={() => this.handlePicture()}
            />
          </View>
          <View style={styles.btn}>
            <ButtonRoutes
              name="Cadastrar"
              onPress={() => this.handleSubmit()}
            />
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
