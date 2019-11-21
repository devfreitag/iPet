import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Modal, ActivityIndicator, SafeAreaView, StatusBar, Platform, AsyncStorage } from 'react-native';
import { ButtonCamera } from '../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default function Foto ({ navigation, props }) {

  const [cameraPermission, setCameraPermission] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');
  const [type, setType] = useState('');


  useEffect(() => {
    async function getPermission() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === 'granted');
    }
    getPermission();
    setType(Camera.Constants.Type.back);
    setModalVisible(false);
  }, []);

  async function handlePicture() {
    setModalVisible(true);
    if (this.camera) {
      const photoData = await this.camera.takePictureAsync();
      console.log(photoData);
      setImage(await this.camera.takePictureAsync());
    }
    setLoading(false);
    console.log('image->'+image);
  };

  async function handleSubmit() {
    setModalVisible(false);
    console.log('passou');
    navigation.goBack();
  }
  
  /*if (cameraPermission === null) {
    return <View />;
  } else if (cameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {*/
    return (
      <SafeAreaView style={styles.container}>
        {modalVisible &&
          <Modal
            visible={modalVisible}
            transparent={true}
          >
            <View style={styles.viewModal}>
            { loading ? (
              <View style={styles.viewModalPicture}>
                <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                  <ActivityIndicator animating={true} size='large'/>
                </View>
              </View>
              ) : (
              <View style={styles.viewModalPicture}>
                <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={image} style={{height:400, width: 400, resizeMode: 'contain'}} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <ButtonCamera onPress={() => {
                    setModalVisible(false);
                    setLoading(true);
                  }} name="Tirar outra foto" width={20}/>
                  <ButtonCamera onPress={() => {
                    handleSubmit()
                  }} name="Enviar" />
                </View>
              </View>
              )}
            </View>
          </Modal>
        }
        <Camera 
          style={{ flex: 4 }}
          ref={ref => { this.camera = ref}}
          type={type}
        >
        </Camera>
          <View style={styles.viewMenu}>
            <View style={styles.viewHeader}>
              <TouchableOpacity
                style={styles.viewButtons}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  );
              }}>
                <Icon
                  name={'undo'}
                  size={40}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.viewButtons, styles.viewIconPhoto]}>
                <Icon
                  style={styles.icon}
                  name={'camera'}
                  size={60}
                  onPress={() => handlePicture()}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewButtons}>
                <Icon
                  name={'image'}
                  size={40}
                  //onPress={() => this.handlePicture()}
                />
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    );
  //}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  viewMenu: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    backgroundColor: 'rgba(47, 183, 167, 0.75)',
    paddingHorizontal: 10,
    borderRadius: 50,
    marginVertical: 40,
    marginHorizontal: 30,
  },
  viewButtons: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIconPhoto: {
    flex: 3,
    alignSelf:'center',
    marginVertical: -15
  },
  viewModalPicture: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#2fb7a7',
    borderWidth: 3,
    margin: 30,
    borderRadius: 4
  },
  viewModal: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.75)',
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 70,
    padding: 25,
    borderWidth: 3,
    textAlign: 'center'
  },
  galery: {
    height:70,
    width:70,
    borderRadius:500,
    backgroundColor: '#fff'
  }
})
