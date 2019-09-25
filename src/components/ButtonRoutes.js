import React from 'react';
import {TouchableHighlight, StyleSheet, Text, Dimensions} from 'react-native';

export default function ButtonRoutes({onPress, name}) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2fb7a7',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});