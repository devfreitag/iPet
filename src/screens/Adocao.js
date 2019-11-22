import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Title from '../components/Title';
import AnimalPicture from '../components/AnimalPicture';
import {ButtonInfo} from '../components/Buttons';
import * as firebase from 'firebase';
import ApyKeys from '../config/firebase';

export default Adocao = ({ navigation }) => {

  const [data, setData] = useState([]);

  fetchData = async() => {
    if (!firebase.apps.length) { firebase.initializeApp(ApyKeys.FirebaseConfig);}
    console.log('inside funtion');
    firebase.database().ref('animals').on('value', data => {
      console.log(data.toJSON());
      setData(data.toJSON());
    });
  }

  useEffect(() => {
    console.log('before');
    this.fetchData();
  }, []);

  _irParaInfoAnimal = () => {
    navigation.navigate('InfoAnimal');
  };

  return (
    <View style={styles.container}>
      <Title name="Adotar"/>
        {Object.keys(data).map((keyName, i) => {
          return (
            <View key={i} style={styles.item}>
              <AnimalPicture />
              <View style={styles.viewData}>
                <Text style={styles.text}>{data[keyName].name}</Text>
                <Text style={styles.text}>
                  {data[keyName].age} anos
                </Text>
                <Text style={styles.textDescription}>{data[keyName].description}</Text>
                <ButtonInfo onPress={() => this._irParaInfoAnimal()} />
              </View>
            </View>
          );
        })}
    </View>
  );
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
  viewData: {
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#2fb7a7',
    margin: 4,
    padding: 20,
    flexDirection: 'row',
    borderRadius: 25,
    height: 100
  },
});
