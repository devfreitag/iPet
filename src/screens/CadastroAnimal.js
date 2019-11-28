import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	View,
	Alert,
	Text,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	Modal
} from 'react-native';
import Background from '../components/Background';
import Constants from 'expo-constants';
import Input from '../components/Input';
import { ButtonSubmit } from '../components/Buttons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import ApyKeys from '../config/firebase';

export default CadastroAnimal = ({ navigation }) => {

	const [pet, setPet] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const [imageURI, setImageURI] = useState('');
	const [imageName, setImageName] = useState('');

	useEffect(() => {
		this.getPermissionCameraRoll();
		this.getPermissionCamera();
	}, []);

	getPermissionCameraRoll = async () => {
		let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (status !== 'granted') {
			alert('Sorry, we need camera roll permissions to make this work!');
		}
	}
	
	getPermissionCamera = async () => {
		let { status } = await Permissions.askAsync(Permissions.CAMERA);
		if (status !== 'granted') {
			alert('Sorry, we need camera permissions to make this work!');
		}
	}

	useEffect(() => {
		if (imageURI!=='') {
			setLoading(true);
			this.uploadImage(imageURI)
			.then(() => {
				console.log("Upload de foto realizado com sucesso!");
				setLoading(false);
			})
			.catch((error) => {
				console.log("Erro:" + error.message);
			});
		}
	}, [imageURI]);

	useEffect(() => {
		console.log('useEffect/loading->' + loading);
	}, [loading])


	handleSubmit = async () => {
		if (!firebase.apps.length) { firebase.initializeApp(ApyKeys.FirebaseConfig);}

		var imagePath;
		await firebase.storage().ref('images').child(imageName).getDownloadURL()
		.then(url => {
			console.log('url->' + url);
			imagePath = url;
		})
		.catch((error) => console.log("não deu certo"));

		console.log(pet + '|' + age + '|' + description + '|' + imagePath);
		firebase.database().ref(`data/`).push().set({
			pet,
			age,
			description,
			picture: imagePath,
			//owner,
			//phone
		}).then(() => console.log("Pet cadastrado com sucesso!"))
		.catch((error) => console.log(error));

		Alert.alert("Cadastro realizado com sucesso! ");
		//navigation.navigate('Adocao');*/
	};

	handlePicture = async () => {
		setLoading(true);
		let result = await ImagePicker.launchCameraAsync();
		if (!result.cancelled) {
			setImageURI(result.uri);
		}
	}

	uploadImage = async (uri) => {
		
		setImageName(uri.substr(uri.lastIndexOf('/')+1));
		const img = uri.substr(uri.lastIndexOf('/')+1)
		console.log("img->"+img);
		if (!firebase.apps.length) { firebase.initializeApp(ApyKeys.FirebaseConfig);}
		const response = await fetch(uri);
		const blob = await response.blob();
		var ref = firebase.storage().ref('images/').child(img);
		return await ref.put(blob);
		
	}

	return (
		<View style={{ flex: 1}}>
			<View style={{ backgroundColor: "#2fb7a7", height: Constants.statusBarHeight}} />
			<View style={styles.backgroundView}>
				<Background />
				<Modal transparent={true} visible={loading}>
					<View style={{justifyContent:'center', alignItems: 'center', borderBottomRadius: 50, backgroundColor: 'white'}}>
						<ActivityIndicator animating={true} size='large'/>
						<Text>Carrengado imagem...</Text>
					</View>
				</Modal>
				<View style={styles.inputs}>
					<Input value={pet} onChangeText={setPet} placeholder="Nome" icon="pet" />
					<Input value={age} onChangeText={setAge} placeholder="Idade" icon="birthday" type="number-pad" />
					<Input value={gender} onChangeText={setGender} placeholder="Gênero (M/F)" icon="gender" />
					<Input value={description} onChangeText={setDescription} placeholder="Descrição" icon="description" />
					<TouchableOpacity
						style={styles.button}
						onPress={this.handlePicture}>
						<Image source={require('../../imgs/icons/camera.png')} />
					</TouchableOpacity>
				</View>
				<ButtonSubmit name="CADASTRAR" onPress={() => this.handleSubmit()/*navigation.navigate('Login')*/} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	backgroundView: {
		flex: 1,
		backgroundColor: '#2fb7a7',
		alignItems: 'center',
		justifyContent: 'center'
	}, 
	inputs: {
		marginTop: 65, 
		marginBottom: 10
	},
	text: {
		color: 'white',
		fontSize: 13
	},
	button: {
		backgroundColor: 'white',
		borderRadius: 50,
		width: 60,
		height:60,
		alignItems:'center',
		justifyContent: 'center',
		alignSelf: 'center',
		marginVertical: 10
	}
})