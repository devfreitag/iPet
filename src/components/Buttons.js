import React from 'react';
import {TouchableHighlight, StyleSheet, Text, Dimensions} from 'react-native';

export function ButtonRoutes({onPress, name}) {
  return (
    <TouchableHighlight style={[styles.button, styles.buttonRoute]} onPress={onPress}>
      <Text style={styles.textRoute}>{name}</Text>
    </TouchableHighlight>
  );
}

export function ButtonCamera({onPress, name}) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.textRoute}>{name}</Text>
    </TouchableHighlight>
  );
}

export function ButtonInfo({onPress}) {
  return (
    <TouchableHighlight style={[styles.button, styles.buttonInfo]} onPress={onPress}>
      <Text style={styles.textInfo}> Mais informações</Text>
    </TouchableHighlight>
  );
}

export function ButtonSubmit({onPress, name}) {
  return (
    <TouchableHighlight style={[styles.button, styles.buttonSubmit]} onPress={onPress}>
      <Text style={styles.textInfo}>{name}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  textRoute: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2fb7a7',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRoute: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 10,
  },
  buttonInfo: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  textInfo: {
    color: '#2fb7a7',
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonSubmit: {
    borderRadius: 50,
    height: 50,
    width: 190,
    backgroundColor: 'white',
  }
});