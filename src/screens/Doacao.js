import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, TextInput, Picker, AsyncStorage, Image} from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonRoutes} from '../components/Buttons';
import { withNavigationFocus } from 'react-navigation';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import ApyKeys from '../config/firebase';


import dog from '../../imgs/dog2.jpg';

function Doacao  ({ navigation, isFocused }) {
  /*static navigationOptions = ({navigation, screenProps}) => ({
    title: null,
    headerLeft: <Header onPress={() => navigation.goBack()} name="Home" />,
  });*/

  const [image, setImage] = useState('');
  const [dono, setDono] = useState('');
  const [telefone, setTelefone] = useState('');
  const [especie, setEspecie] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');

  useEffect(() => {
    console.log('use effect doacao');
    AsyncStorage.getItem('picture').then(picture => {
      console.log(picture);
      if (picture) setImage(picture);
    })
  }, [isFocused]);

  useEffect(() => {
    this.getPermissionCameraRoll();
    this.getPermissionCamera();
  }, []);

  getPermissionCameraRoll = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
  }

  getPermissionCamera = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }

  handleSubmit = () => {
    Alert.alert("Cadastro realizado com sucesso! ");
    navigation.navigate('Adocao');
  };

  handlePicture = async () => {
    console.log("try");
    let result = await ImagePicker.launchCameraAsync();
    
    if (!result.cancelled) {
      console.log("start");
      this.uploadImage(result.uri)
      .then(() => {
        console.log("deu boa");
        Alert.alert("Sucess");
      })
      .catch((error) => {
        console.log(error.message);
        Alert.alert(error.message);
      });
    }
  }

  uploadImage = async (uri) => {
    if (!firebase.apps.length) { firebase.initializeApp(ApyKeys.FirebaseConfig);}
    const response = await fetch(uri);
    const blob = await response.blob();
    console.log("log2 blob->" + blob);
    var ref = firebase.storage().ref().child("my-image");
    console.log("log3 ref->" + ref);
    return ref.put(blob);
  }
  
  return (
    <View style={styles.container}>
      <Title name="DOAR" />
      <View style={styles.viewForm}>
        <TextInput
          value={dono}
          onChangeText={setDono}
          style={styles.inputs}
          placeholder="Responsável" 
        />
        <TextInput
          value={telefone}
          onChangeText={setTelefone}
          style={styles.inputs}
          placeholder="Telefone"
          keyboardType="phone-pad"
        />
        <View style={styles.inputs}>
          <Picker
            selectedValue={especie}
            onValueChange={(itemValue, itemIndex) => {
              setEspecie(itemValue);
            }}>
            <Picker.Item label="Cão" value="cao" />
            <Picker.Item label="Gato" value="gato" />
          </Picker>
        </View>
        <TextInput
          value={idade}
          onChangeText={setIdade}
          style={styles.inputs}
          placeholder="Idade"
          keyboardType="number-pad"
        />
        <View style={styles.inputs}>
          <Picker
            selectedValue={genero}
            onValueChange={(itemValue, itemIndex) => {
              setGenero(itemValue);
            }}>
            <Picker.Item label="Macho" value="macho" />
            <Picker.Item label="Fêmea" value="femea" />
          </Picker>
        </View>
        <TextInput
          value={caracteristicas}
          onChangeText={setCaracteristicas}
          style={[styles.inputs, styles.boxArea]}
          placeholder="Características"
        />
        <View style={styles.viewIcon}>
          
            <Icon
              style={styles.icon}
              name={'camera'}
              size={40}
              onPress={this.handlePicture}
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
    padding: 5,
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

export default withNavigationFocus(Doacao);
