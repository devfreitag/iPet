import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Title({name, onPress}) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Icon style={styles.icon} name={'chevron-left'} size={40} />
      </TouchableOpacity>
      <View style={styles.viewTitle}>
      <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    //backgroundColor: 'blue'
  },
  viewTitle: {
    alignSelf: 'center',
    //backgroundColor: 'brown',
    flex: 1
  },
  title: {
    color: '#2fb7a7',
    fontSize: 54,
    fontFamily: 'GROBOLD',
    alignSelf: 'center'
  },
  icon: {
    marginTop: 5,
    color: '#2fb7a7'
  },
  viewIcon: {
    alignItems: 'flex-start',
  },
  btn: {
    marginLeft: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
