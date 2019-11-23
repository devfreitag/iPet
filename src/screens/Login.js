import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	View,
	Text,
	StatusBar
} from 'react-native';
import Background from '../components/Background';
import Constants from 'expo-constants';
import Title from '../components/Title';


export default Login = ({ navigation }) => {

	return (
		<View style={{ flex: 1}}>
			<View style={{ backgroundColor: "#2fb7a7", height: Constants.statusBarHeight}} />
			<View style={styles.container}>
				<Background />
				<Title name="iPet"/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2fb7a7'
	}
})