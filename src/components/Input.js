import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

export default function Input({placeholder, icon, type, value, onChangeText, secureTextEntry = false}) {

	var logo;
	if (icon==='mail') logo = require('../../imgs/icons/mail.png');
	else if (icon==='lock') logo = require('../../imgs/icons/lock.png');
	else if (icon==='user') logo = require('../../imgs/icons/user.png');
	else if (icon==='pet') logo = require('../../imgs/icons/pet.png');
	else if (icon==='birthday') logo = require('../../imgs/icons/birthday.png');
	else if (icon==='gender') logo = require('../../imgs/icons/gender.png');
	else if (icon==='description') logo = require('../../imgs/icons/description.png');
	else if (icon==='phone1') logo = require('../../imgs/icons/phone1.png');
	
	return (
		<View style={styles.container}>
			<View style={{justifyContent: 'center', width: 40, paddingHorizontal: 10}}>
				<Image style={styles.img} source={logo}/>
			</View>
			<TextInput 
				placeholderTextColor="#A0A3A3"
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={styles.input}
				keyboardType={type}
				secureTextEntry={secureTextEntry}
			/>
		</View>	
	)
};

const styles = StyleSheet.create({
	container: {
		width: 275,
		height: 47,
		backgroundColor: 'white',
		borderColor: 'white',
    	borderWidth: 1,
		borderRadius: 5,
		flexDirection: 'row',
		marginBottom: 13,
	},
	input: {
		flex: 1,
    	padding: 5,
		color: '#2fb7a7',
	},
	img: {
		marginHorizontal: 10,
		alignSelf: 'center'
	}
});