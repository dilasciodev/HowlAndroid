import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import {  BlueButtonFull, Input, LightBlue, DarkBlue, CreateButton } from './common';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';
import ImageLoad from 'react-native-image-placeholder';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';







class AlertDetail extends AuthorizedHowlComponent {

  componentWillMount() {

    let AHC = this;

    let packEx = this.returnAlertImage().then(function(result){
      AHC.setState({
        alertImage:result
      })
      console.log(result);
    });
    let packText = this.returnAlertText().then(function(result){
      AHC.setState({
        alertText:result
      })
      console.log(result);
    });
    let getLat = this.returnLatitude().then(function(result){
      let newresult = Number(result);
      AHC.setState({
        latitude:newresult
      })
      console.log(result);
    });
    let getLon = this.returnLongitude().then(function(result){
      let newresult = Number(result);
      AHC.setState({
        longitude:newresult
      })
      console.log(result);
    });
    let getGeo = this.returnGeo911().then(function(result){
      if(result==null){
        AHC.setState({
          geo911:'911'
        })
      }else{
        AHC.setState({
          geo911:result
        })
      }


      console.log(result);
    });



  }


    constructor(props) {
      super(props);
      //this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {
        alertImage:'',
        alertText:'',
        latitude:'0',
        longitude:'0',
        geo911:'911'   			//listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
       };

    }

  async returnAlertImage(){
      return this.returnAsync('ALERT_IMAGE');
  }
  async returnAlertText(){
      return this.returnAsync('ALERT_TITLE');
  }
  async returnLatitude(){
      return this.returnAsync('ALERT_LATITUDE');
  }
  async returnLongitude(){
      return this.returnAsync('ALERT_LONGITUDE');
  }
  async returnGeo911(){
      return this.returnAsync('ALERT_GEO911');
  }


  callAlert(){
    const AHC = this;
    RNImmediatePhoneCall.immediatePhoneCall(this.state.geo911);
  }


  render () {

    if (this.state.latitude) {
      return (

          <View style={styles.outerContainer}>
          <View style={styles.thisContainer}>
          <MapView
            provider={ PROVIDER_GOOGLE }
            style={ styles.mapContainer }
            initialRegion={{
              latitude:this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta:0.922,
              longitudeDelta:0.0421
            }}
            >
            <Marker

       coordinate={{
         latitude: this.state.latitude,
         longitude: this.state.longitude,
       }}

     />
     </MapView>
            </View>
            <View style={styles.blockStyle}>
          <Text style={styles.blackText}>
          {this.state.alertText}</Text>
          <View style={styles.container}>
          <TouchableOpacity onPress={() => {this.callAlert()}} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>CALL 911</Text>
          </TouchableOpacity>
          </View>
          </View>
          </View>
      );
    }else{

    return (

                <View style={styles.outerContainer}>
                <View style={styles.cameraBlock}>
                <Image

                 style={styles.imageStyle}
                 source={{ uri:'data:image/jpg;base64,'+this.state.alertImage  }}

                 />
                </View>
                <Text style={styles.redText}>
                {this.state.alertText}</Text>
                <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.callAlert()}} style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>CALL 911</Text>
                </TouchableOpacity>
                </View>
                </View>

            );
          }
        }
        }

const styles = {

  cameraBlock:{
    height:300,
    marginBottom:30
  },


  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 16,
    paddingBottom: 10,
    textAlign: 'center'
  },
  redText:{
    fontSize:20,
    color:'#e4322b',
    textAlign:'center',
    marginBottom:20,
    paddingLeft:40,
    paddingRight:40,
    paddingTop:20
  },
  blackText:{
    fontSize:20,
    color:'#999',
    textAlign:'center',
    marginBottom:20,
    paddingLeft:40,
    paddingRight:40,
    paddingTop:20
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

  thisContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',

    height:400
  },
  blockStyle:{
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    marginTop:350
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    height:400
  },
  imageStyle:{
    height:300,
    flex:1
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
  outerContainer:{
    flex: 1,
    paddingLeft:0,
    paddingRight:0,
    paddingTop:65
  },
  container:{
    flex: 1,
    paddingLeft:40,
    paddingRight:40,
    flexDirection:'row'

  },
  iconStyle:{
    position:'absolute',
    right:0,
    top:30
  },
  wrapper: {
    marginTop:0,
    paddingTop:0
  },

  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    paddingRight:10,
    paddingLeft:10,
    marginBottom:20
  },
  text2:{
    color:'#6d6e70',
    fontSize:14,
    textAlign:'center',
    paddingRight:40,
    paddingLeft:40,
    lineHeight:30
  }
}

export default AlertDetail;
