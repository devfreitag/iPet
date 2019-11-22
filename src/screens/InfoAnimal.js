import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import Title from '../components/Title';
import Contact from '../components/Contact';
import * as firebase from 'firebase';

export default InfoAnimal = ({ navigation }) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const id = navigation.getParam('id', 0);
    firebase.database().ref(`data/${id}`).on('value', data => {
      setName(data.toJSON().name);
      setAge(data.toJSON().age);
      setDescription(data.toJSON().description);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.info}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textAge}>{age} anos</Text>
        <Text style={styles.textInfo}>
          {description}
        </Text>
        <View>
          <Contact />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  info: {
    marginHorizontal: 20,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textAge: {
    fontSize: 19,
  },
  textInfo: {
    fontSize: 17,
    marginTop: 25,
    fontStyle: 'italic'
  }
});
