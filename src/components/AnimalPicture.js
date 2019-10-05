import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function AnimalPicture() {
  return (
    <View style={styles.viewImage}>
      <Image source={require('../../imgs/dog1.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewImage: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    borderRadius: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});
