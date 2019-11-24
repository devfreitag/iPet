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
    <TouchableHighlight style={[styles.button, styles.buttonCamera]} onPress={onPress}>
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
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRoute: {
    width: 235,
    height: 65,
    marginHorizontal: 0
  },
  buttonInfo: {
    width: 210,
    height: 40,
    borderColor: '#2fb7a7',
    borderWidth: 1,
    borderRadius: 50
  },
  textInfo: {
    color: '#2fb7a7',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textRoute: {
    color: '#2fb7a7',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSubmit: {
    borderRadius: 50,
    height: 50,
    width: 190,
    backgroundColor: 'white',
  },
  buttonCamera: {
    backgroundColor: 'black'
  }
});
