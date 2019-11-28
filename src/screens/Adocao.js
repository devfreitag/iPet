import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image
} from 'react-native';
import AnimalPicture from '../components/AnimalPicture';
import {ButtonInfo, ButtonCamera} from '../components/Buttons';
import * as firebase from 'firebase';
import ApyKeys from '../config/firebase';
import Background from '../components/Background';
import Constants from 'expo-constants';
import InfoAnimal from '../screens/InfoAnimal';

export default Adocao = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  fetchData = async() => {
    if (!firebase.apps.length) { firebase.initializeApp(ApyKeys.FirebaseConfig);}
    console.log('inside funtion');
    firebase.database().ref('data/pet').on('value', data => {
      console.log(data.toJSON());
      setData(data.toJSON());
    });
  }

  useEffect(() => {
    this.fetchData();
  }, []);

  _irParaInfoAnimal = (i) => {
    console.log(i);
    
    //navigation.navigate('InfoAnimal', {id: i});
  };
  // <ButtonCamera onPress={() => setModalVisible(false)} name="Fechar" />
  return (
    <View style={{ flex: 1}}>
			<View style={{ backgroundColor: "#2fb7a7", height: Constants.statusBarHeight}} />
      <View style={styles.backgroundView}>
        <Background />
        
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{alignItems:'flex-end'}}
                >
                  <Image source={require('../../imgs/icons/close.png')} />
                </TouchableOpacity>
              <InfoAnimal id={id}/>
            </View>
            
          </View>
        </Modal>
        

        <View style={styles.container}>
            <ScrollView>
              {Object.keys(data).map((keyName, i) => {
                return (
                  <View  key={i} style={styles.item}>
                    <AnimalPicture picture={data[keyName].picture}/>
                    <View style={styles.viewData}>
                      <Text style={[styles.text, {fontWeight: 'bold', alignSelf: 'center'}]}>{data[keyName].pet}</Text>
                      <Text style={styles.text}>
                        {data[keyName].age} anos
                      </Text>
                      <Text style={styles.textDescription}>{data[keyName].description.length > 60 ? data[keyName].description.substring(0,60) +  '...' : data[keyName].description}</Text>
                      <ButtonInfo onPress={() => {
                        setModalVisible(true);
                        setId(keyName);
                        }} />
                    </View>
                  </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
		flex: 1,
		backgroundColor: '#2fb7a7',
  }, 
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 10,
    borderRadius: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(47,183,167,0.75)',
    paddingHorizontal: 15
  },
  modalView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10
  },
  text: {
    fontSize: 25,
    color: '#2fb7a7'
  },
  textDescription: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  viewData: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  item: {
    alignItems: 'center',
    margin: 4,
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
});
