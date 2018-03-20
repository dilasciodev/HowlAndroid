import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from 'react-native';
import {  BlueButtonFull, Input, LightBlue, DarkBlue, CreateButton } from './common';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import  AuthorizedHowlComponent  from './AuthorizedHowlComponent';


class TestPackAlarm extends AuthorizedHowlComponent {



  constructor(props) {
      super(props);

      this.camera = null;

      this.state = {
        camera: {
          aspect: Camera.constants.Aspect.fill,
          captureTarget: Camera.constants.CaptureTarget.cameraRoll,
          type: Camera.constants.Type.back,
          orientation: Camera.constants.Orientation.auto,
          flashMode: Camera.constants.FlashMode.auto,
        },
        isRecording: true,
        alertnumber:'1234567890'
      };

      const AHC = this;


      let get_GEO = this.returnGeo().then(function(result){
        AHC.setState({
          alertnumber:result
        });
        console.log('number stuff');
        console.log(result);
        console.log(AHC.state);
        //console.log(this.state);
        });



    }


    componentWillMount() {

      this.startRecording();
      PlaySound('howl_effect');


    }

    callAlert(){
      const AHC = this;
      console.log(this.state);
      console.log(AHC.state);
      RNImmediatePhoneCall.immediatePhoneCall(this.state.alertnumber);
    }



    async returnGeo(){
        return this.returnAsync('HOWL_GEO');
    }



    takePicture = () => {
      if (this.camera) {
        this.camera
          .capture()
          .then(data => console.log(data))
          .catch(err => console.error(err));
      }
    };

    startRecording = () => {
      if (this.camera) {
        this.camera
          .capture({ mode: Camera.constants.CaptureMode.video })
          .then(data => console.log(data))
          .catch(err => console.error(err));
        this.setState({
          isRecording: true,
        });
      }
    };

    stopRecording = () => {
      StopSound();
      if (this.camera) {
        this.camera.stopCapture();
        this.setState({
          isRecording: false,
        });
        Actions.enterCancel();
      }
    };







    switchType = () => {
      let newType;
      const { back, front } = Camera.constants.Type;

      if (this.state.camera.type === back) {
        newType = front;
      } else if (this.state.camera.type === front) {
        newType = back;
      }

      this.setState({
        camera: {
          ...this.state.camera,
          type: newType,
        },
      });
    };

    get typeIcon() {
      let icon;
      const { back, front } = Camera.constants.Type;

      if (this.state.camera.type === back) {
        icon = require('../assets/ic_camera_rear_white.png');
      } else if (this.state.camera.type === front) {
        icon = require('../assets/ic_camera_front_white.png');
      }

      return icon;
    }

    switchFlash = () => {
      let newFlashMode;
      const { auto, on, off } = Camera.constants.FlashMode;

      if (this.state.camera.flashMode === auto) {
        newFlashMode = on;
      } else if (this.state.camera.flashMode === on) {
        newFlashMode = off;
      } else if (this.state.camera.flashMode === off) {
        newFlashMode = auto;
      }

      this.setState({
        camera: {
          ...this.state.camera,
          flashMode: newFlashMode,
        },
      });
    };


    get flashIcon() {
      let icon;
      const { auto, on, off } = Camera.constants.FlashMode;

      if (this.state.camera.flashMode === auto) {
        icon = require('../assets/ic_flash_auto_white.png');
      } else if (this.state.camera.flashMode === on) {
        icon = require('../assets/ic_flash_on_white.png');
      } else if (this.state.camera.flashMode === off) {
        icon = require('../assets/ic_flash_off_white.png');
      }

      return icon;
    }

  render () {

    return (

      <View style={styles.container}>
 <StatusBar animated hidden />
 <Camera
   ref={cam => {
     this.camera = cam;
   }}
   style={styles.preview}
   aspect={this.state.camera.aspect}
   captureTarget={this.state.camera.captureTarget}
   type={this.state.camera.type}
   flashMode={this.state.camera.flashMode}
   onFocusChanged={() => {}}
   onZoomChanged={() => {}}
   defaultTouchToFocus
   mirrorImage={false}
   cropToPreview={false}
   permissionDialogTitle="Sample title"
   permissionDialogMessage="Sample dialog message"
 />
 <View style={[styles.overlay, styles.topOverlay]}>
   <TouchableOpacity style={styles.typeButton} onPress={this.switchType}>
     <Image source={this.typeIcon} />
   </TouchableOpacity>
   <TouchableOpacity style={styles.flashButton} onPress={this.switchFlash}>
     <Image source={this.flashIcon} />
   </TouchableOpacity>
 </View>
 <View style={[styles.overlay, styles.bottomOverlay]}>

 <Text style={styles.redText}>
 Your Emergency Contacts Have Been Notified</Text>
 <Text style={styles.redText}>
 {this.state.alertnumber}</Text>


 <View style={styles.rowContainer}>
 <TouchableOpacity onPress={this.stopRecording} style={styles.buttonStyle}>
   <Text style={styles.textStyle}>CANCEL</Text>
 </TouchableOpacity>

 <TouchableOpacity  onPress={() => {this.callAlert()}} style={styles.buttonStyle2}>
   <Text style={styles.textStyle}>CALL 911</Text>
 </TouchableOpacity>
 </View>



   <View style={styles.buttonsSpace} />

 </View>
</View>

            );
          }
        }

const styles = {
  container: {
   flex: 1,
 },
 preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center'
 },
 overlay: {
   position: 'absolute',
   padding: 25,
   right: 0,
   left: 0
 },
 topOverlay: {
   top: 0,
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
 },
 bottomOverlay: {
   bottom: 0,
   backgroundColor: 'rgba(255,255,255,0.9)',
   height:300
   //justifyContent: 'center',
   //alignItems: 'center',
 },
rowContainer:{
  flexDirection:'row'
},
textStyle: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  paddingTop: 16,
  paddingBottom: 10,
  textAlign: 'center'
},
 buttonStyle: {
   alignSelf:'stretch',
   backgroundColor: '#00a3d8',
   borderColor: '#00a3d8',
   borderRadius: 30,
   borderWidth: 1,
   height:60,
   overflow:'hidden',
   marginTop:20,
   marginLeft:0,
   flex:1,
   marginRight:5
 },
 buttonStyle2: {
   alignSelf:'stretch',
   backgroundColor: '#063e5b',
   borderColor: '#063e5b',
   borderRadius: 30,
   borderWidth: 1,
   height:60,
   overflow:'hidden',
   marginTop:20,
   marginLeft:0,
   flex:1
 },
 captureButton: {
   padding: 15,
   backgroundColor: 'white',
   borderRadius: 40,
 },
 typeButton: {
   padding: 5,
 },
 flashButton: {
   padding: 5,
 },
 buttonsSpace: {
   width: 10,
 },
 redText:{
   fontSize:20,
   color:'#e4322b',
   textAlign:'center',
   marginBottom:20,
   paddingLeft:40,
   paddingRight:40
 }
}

export default TestPackAlarm;
