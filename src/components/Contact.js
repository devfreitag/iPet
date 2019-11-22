import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AnimalPicture from '../components/AnimalPicture';

export default function Contact({ owner, phone }) {
  useEffect(() => {
    console.log('teste->'+owner);
  },[]);


  return (
    <View style={styles.container}>
      <View style={styles.viewContact}>
        <View style={styles.viewIcon}>
          <Icon
            style={styles.icon}
            name={'phone'}
            size={40}
            //onPress={onPress}
          />
        </View>
        <View style={styles.viewInfoContact}>
          <Text>Entre em contato com:</Text>
          <Text style={styles.ownerData}>{owner} - {phone}</Text>
        </View>
      </View>
      <View style={styles.viewImage}>
        <AnimalPicture />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignContent: 'center',
    backgroundColor: '#2fb7a7'
  },
  viewContact: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
  },
  viewIcon: {
    padding: 10,
  },
  viewInfoContact: {
    justifyContent: 'center',
    paddingLeft: 10,
    fontSize: 20,
  },
  ownerData: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  viewImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  icon: {
    marginTop: 5,
    color: 'white',
  },
});
