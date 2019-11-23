import React from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import backgroundImg from '../../imgs/background.png';

export default function Background() {
  return (
    <Image style= { styles.backgroundImage } source={backgroundImg} />
  );
}

const styles = StyleSheet.create({
	
	backgroundImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		opacity: 0.05,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	}
})