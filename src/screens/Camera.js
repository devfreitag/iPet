import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { ButtonRoutes } from '../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraExample extends React.Component {
  
	static navigationOptions = ({navigation, screenProps}) => ({
		header: null,
	});  
  
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    uri: '',
    modalVisible: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted', modalVisible: false });
  }

  async handlePicture() {
    console.log('Button Pressed');
    if (this.camera) {
      console.log('Taking photo');
      let { uri } = await this.camera.takePictureAsync();
      this.setState({ uri })
      console.log(this.state.uri);
    }
    this.setState({ modalVisible: true})
  }

  render() {
    const { hasCameraPermission, uri } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Modal
            visible={this.state.modalVisible}
            transparent={true}
          >
            <View style={styles.viewModal}>
              <View style={styles.viewModalPicture}>
                <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={{uri}} style={{height:400, width: 400, resizeMode: 'contain'}} />
                </View>
                <ButtonRoutes onPress={() => this.setState({modalVisible: false})} name="Fechar" />
              </View>
            </View>
          </Modal>
					<Camera 
						style={{ flex: 4 }}
						ref={ref => { this.camera = ref}}
            type={this.state.type}
          >
          </Camera>
            <View style={styles.viewMenu}>
              <View style={styles.viewHeader}>
                <TouchableOpacity
                  style={styles.viewButtons}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
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
                    onPress={this.handlePicture.bind(this)}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewButtons}>
                  <Icon
                    name={'image'}
                    size={40}
                    onPress={() => this.handlePicture()}
                  />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
