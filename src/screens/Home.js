import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import Background from '../components/Background';
import Constants from 'expo-constants';
import {ButtonRoutes } from '../components/Buttons';
import * as firebase from 'firebase';


export default Home = ({ navigation }) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const { currentUser } = firebase.auth()
    setUser(currentUser);
  }, []);

  return (
    <View style={{ flex: 1}}>
			<View style={{ backgroundColor: "#2fb7a7", height: Constants.statusBarHeight}} />
      <View style={styles.backgroundView}>
        <Background />
        <View style={styles.container}>
          <Image source={require('../../imgs/avatar.png')} />
          <Text style={styles.title}>{user.displayName}</Text>
        </View>
        <View style={styles.btnView}>
            <View style={{alignItems: 'flex-end'}}>
              <ButtonRoutes name="QUERO ADOTAR!" onPress={() => navigation.navigate('Adocao')}/>
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <ButtonRoutes name="QUERO DOAR!" onPress={() => navigation.navigate('CadastroAnimal')}/>
            </View>
          </View>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  backgroundView: {
		flex: 1,
		backgroundColor: '#2fb7a7',
  }, 
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 10
  },
  btnView: {
    marginTop: 90,
  }
});