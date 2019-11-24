import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Modal
} from 'react-native';
import AnimalPicture from '../components/AnimalPicture';
import {ButtonInfo} from '../components/Buttons';
import * as firebase from 'firebase';
import ApyKeys from '../config/firebase';
import Background from '../components/Background';
import Constants from 'expo-constants';
import InfoAnimal from '../screens/InfoAnimal';

export default Adocao = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [id, setId] = useState('');

  fetchData = async() => {
    if (!firebase.apps.length) { firebase.initializeApp(ApyKeys.FirebaseConfig);}
    console.log('inside funtion');
    firebase.database().ref('data').on('value', data => {
      console.log(data.toJSON());
      setData(data.toJSON());
    });
  }

  useEffect(() => {
    this.fetchData();
  }, []);

  _irParaInfoAnimal = (i) => {
    console.log(i);
    
    //navigation.navigate('InfoAnimal', {id: i});
  };
  //{id && (/*setId(''), */console.log('chamando info/id->'+id), <InfoAnimal id={id} />)}
  return (
    <View style={{ flex: 1}}>
			<View style={{ backgroundColor: "#2fb7a7", height: Constants.statusBarHeight}} />
      <View style={styles.backgroundView}>
        <Background />
        
        
        <InfoAnimal id={id} />
      
        <View style={styles.container}>
            <ScrollView>
              {Object.keys(data).map((keyName, i) => {
                return (
                  <View  key={i} style={styles.item}>
                    <AnimalPicture />
                    <View style={styles.viewData}>
                      <Text style={[styles.text, {fontWeight: 'bold', alignSelf: 'center'}]}>{data[keyName].name}</Text>
                      <Text style={styles.text}>
                        {data[keyName].age} anos
                      </Text>
                      <Text style={styles.textDescription}>{data[keyName].description.length > 60 ? data[keyName].description.substring(0,60) +  '...' : data[keyName].description}</Text>
                      <ButtonInfo onPress={() => setId(keyName)} />
                    </View>
                  </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
		flex: 1,
		backgroundColor: '#2fb7a7',
  }, 
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 10,
    borderRadius: 10
  },
  text: {
    fontSize: 25,
    color: '#2fb7a7'
  },
  textDescription: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  viewData: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  item: {
    alignItems: 'center',
    margin: 4,
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
});
