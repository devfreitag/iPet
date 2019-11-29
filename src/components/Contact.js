import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function Contact({ owner, phone }) {
  useEffect(() => {
    console.log('teste->'+owner);
  },[]);


  return (
    <View style={styles.container}>
      <View style={styles.viewContact}>
        <View style={styles.viewIcon}>
          <Image source={require('../../imgs/icons/phone.png')} />
        </View>
        <View style={styles.viewInfoContact}>
          <Text>Entre em contato com:</Text>
          <Text style={styles.ownerData}>{owner} - {phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2fb7a7',
  },
  viewContact: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  viewIcon: {
    padding: 10,
  },
  viewInfoContact: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    fontSize: 17,
  },
  ownerData: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22
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
