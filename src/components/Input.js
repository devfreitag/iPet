import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

export default function Input({placeholder, icon}) {

	const [font, setFont] = useState('italic');
	
	var logo;
	if (icon==='mail') logo = require('../../imgs/icons/mail.png');
	else logo = require('../../imgs/icons/lock.png');
	
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={logo}/>
			<TextInput 
				placeholderTextColor="#A0A3A3"
				placeholder={placeholder}
				fontStyle={font==='italic' ? 'italic' : 'normal'}
				style={styles.input}
				onChange={() => {
					setFont('normal');
				}}
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
		marginBottom: 13
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