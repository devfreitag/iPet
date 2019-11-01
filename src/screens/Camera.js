import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
					<Camera 
						style={{ flex: 1 }}
						ref={ref => { this.camera = ref}}
						type={this.state.type}
          >

            <View style={styles.viewCamera}>
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
                  <TouchableOpacity
                    style={[styles.viewButtons, styles.viewIconPhoto]}>
                    <Icon
                      style={styles.icon}
                      name={'camera'}
                      size={60}
                      onPress={() => this.handlePicture()}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.viewButtons}>
                    <Icon
                      name={'image'}
                      size={40}
                      onPress={() => this.handlePicture()}
                    />
                  </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewCamera: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse'
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    backgroundColor: 'rgba(47, 183, 167, 0.75)',
    paddingHorizontal: 10,
    borderRadius: 50,
    marginVertical: 40,
    marginHorizontal: 30
  },
  viewButtons: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIconPhoto: {
    flex: 3,
    //height: 100,
    alignSelf:'center',
    marginVertical: -15
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
