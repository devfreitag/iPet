import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight
} from 'react-native';
import Background from '../components/Background';
import Constants from 'expo-constants';
import Title from '../components/Title';
import Input from '../components/Input';
import { ButtonSubmit } from '../components/Buttons';
import * as firebase from 'firebase';


export default Login = ({ navigation }) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	handleSubmit = () => {

		firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			console.log('deu boa');
			navigation.navigate('Home');
		})
		.catch(error => alert(error.message))
	}

	return (
		<View style={{ flex: 1}}>
			<View style={{ backgroundColor: "#2fb7a7", height: Constants.statusBarHeight}} />
			<View style={styles.backgroundView}>
				<Background />
				<Title name="iPet"/>
				<View style={styles.inputs}>
					<Input value={email} onChangeText={setEmail} placeholder="e-mail" icon="mail" />
					<Input value={password} onChangeText={setPassword} placeholder="senha" icon="lock" secureTextEntry={true} />
				</View>
				<ButtonSubmit name="LOGIN" onPress={handleSubmit} />
				<TouchableHighlight style={{marginTop: 10}} onPress={() => navigation.navigate('CadastroUser')}>
					<Text style={styles.text}>Não tem uma conta? <Text style={{fontWeight: 'bold'}}>CADASTRE-SE</Text> aqui.</Text>
				</TouchableHighlight>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	backgroundView: {
		flex: 1,
		backgroundColor: '#2fb7a7',
		alignItems: 'center'
	}, 
	inputs: {
		marginTop: 65, 
		marginBottom: 10
	},
	text: {
		color: 'white',
		fontSize: 13
	}
})