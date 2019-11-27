import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Contact from '../components/Contact';
import * as firebase from 'firebase';
import AnimalPicture from '../components/AnimalPicture';

export default InfoAnimal = ({ navigation, id }) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    console.log('useEffect/id->['+id+']');
    if (id.length!=0) {
      console.log('passou da condicional');
      firebase.database().ref(`data/${id}`).on('value', data => {
        setName(data.toJSON().pet);
        setAge(data.toJSON().age);
        setDescription(data.toJSON().description);
        setOwner(data.toJSON().owner);
        setPhone(data.toJSON().phone);
        console.log('owner->'+data.toJSON().owner);
      });
    }
  }, []);


  return (
    console.log('return/id->'+id),
    //<View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.viewImage}>
          <AnimalPicture />
        </View>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textAge}>{age} anos</Text>
        <Text style={styles.textAge}>Fêmea</Text>
        <Text style={styles.textInfo}>
          {description}
        </Text>
        <View>
          <Contact owner={owner} phone={phone} />
        </View>
      </View>
    //</View>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 15,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#2fb7a7'
  },
  textAge: {
    fontSize: 19,
    color: '#2fb7a7'
  },
  textInfo: {
    fontSize: 17,
    marginTop: 20,
    fontStyle: 'italic',
    color: '#2fb7a7'
  },
  viewImage: {
    alignItems: 'center'
  }
});
