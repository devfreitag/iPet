import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Title({name}) {
  return (
    <View style={styles.viewTitle}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewTitle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    color: '#2fb7a7',
    fontSize: 54,
    fontFamily: 'GROBOLD',
  },
});
