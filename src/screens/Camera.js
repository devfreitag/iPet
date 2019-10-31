import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
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
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.viewButtons, styles.viewIconPhoto]}>
                  <Text style={{  fontSize: 18, marginBottom: 10, color: 'white' }}>teste</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewButtons}>
                  <View style={styles.galery}></View>
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
    backgroundColor: 'red',
    flexDirection: 'column-reverse'
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    backgroundColor: 'blue',
    paddingHorizontal: 20
  },
  viewButtons: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  viewIconPhoto: {
    flex: 3
  },
  galery: {
    height:70,
    width:70,
    borderRadius:500,
    backgroundColor: '#fff'
  }
})
