import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonRoutes({onPress, name}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Icon style={styles.icon} name={'chevron-left'} size={20} />
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    marginTop: 5,
  },
});
