import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  AsyncStorage,
  Easing,
  PanResponder,
  ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton } from './common';
import EmployeeCreate from './EmployeeCreate';
import CameraMain from './CameraMain';
import DevicesMain from './DevicesMain';
import MyPackMain from './MyPackMain';
import MonitoringMain from './MonitoringMain';
import { AnimatedCircularProgress, CircularProgress } from 'react-native-circular-progress';
import  AuthorizedHowlComponent  from './AuthorizedHowlComponent';
import { connect } from 'react-redux';
import { saveId, saveToken, saveFirstName, saveLastName, saveEmail, saveAddress, saveAddress2, saveCity, saveState, saveZip, saveLatitude, saveLongitude, saveCops, saveCancel, saveSilence, savePhone, saveConfirm } from '../actions';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';
import TimerCountdown from 'react-native-timer-countdown'


var ACTION_TIMER = 2500;
const MAX_POINTS = 3;
var COLORS = ['rgb(255,255,255)', 'rgb(25,78,104)'];

import Spinner from 'react-native-loading-spinner-overlay';


class HomeScreen extends AuthorizedHowlComponent {



  constructor(props) {
    super(props);
    this.state = {
      pressAction: new Animated.Value(0),
      mainuserid:'',
      textComplete: '',
      buttonWidth: 0,
      buttonHeight: 0,
      showCancel: false,
      showHome:true,
      opacity:1,
      firstname: '',
      lastname:'',
      latitude: '',
      longitude: '',
      error: '',
      emergencytype: '',
      userid: '',
      usertoken:'',
      hasSubscription:false,
      callpack:'',
      callambulance:'',
      callfire:'',
      callpolice:''

     };
      this.handlePressIn = this.handlePressIn.bind(this);
      this.handlePressOut = this.handlePressOut.bind(this);
      this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this);
      this.animationActionComplete = this.animationActionComplete.bind(this);
      this.afterAlert = this.afterAlert.bind(this);
      this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this);
      this.showProgress = this.showProgress.bind(this);

  }

    componentWillMount () {


  		super.componentWillMount();
  		//this.timing("exampleGetUserPack", "GetUserPack", {"UserID":49}, this.showMsg, 6000); //it wont be getpack but that's just an example, also pkg is wrong
  		Actions.refresh({key: 'drawer', open: false });
      this._value = 0;
      this.state.pressAction.addListener((v) => this._value = v.value);
      let AHC = this;
      let packEx = this.returnUserID().then(function(result){
        console.log(result);
        let packId = ({"UserID":result});

        AHC.props.saveId(result);


        console.log('yoyoyoyooyoy');
        console.log(this.props);
        //AHC.authorizedHowlCall("AddEditUserHomeAddress", packId, AHC.getUserStuff);
        });

        navigator.geolocation.getCurrentPosition(
          (position) => {
            let getLat = position.coords.latitude;
            let getLon = position.coords.longitude;

            getLat.toString();
            getLon.toString();

            let getLat2 = getLat;
            let getLon2 = getLon;

            let getLat3 = '' + getLat2;
            let getLon3 = '' + getLon2;

            console.log('getlatlong');
            console.log(getLon3);
            console.log(getLat3);
            console.log('getlatlongend');



            this.setState({
              latitude: getLat3,
              longitude: getLon3,
              error: null,
              callpack:'1',
              callpolice:'2',
              callambulance:'3',
             callfire:'4'            });
          },
          //(error) => this.setState({ error: error.message }),
          //{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );

   console.log(this.state);
   console.log('componentmounting');

   let packFirst = this.returnFirstName().then(function(result){
     console.log(result);

     AHC.setState({
       firstname:result
     })

   });

   let packMyID = this.returnTheID().then(function(result){
     console.log(result);

     AHC.setState({
       mainuserid:result
     })

   });

   let getToken = this.returnToken().then(function(result){
     AHC.props.saveToken(result);
   });

   let getFirstName = this.returnFirstName().then(function(result){
     AHC.props.saveFirstName(result);
   });

   let getLastNAme = this.returnLastName().then(function(result){
     AHC.props.saveLastName(result);
   });

   let getEmail = this.returnEmail().then(function(result){
     AHC.props.saveEmail(result);
   });

   let getAddress = this.returnAddress().then(function(result){
     AHC.props.saveAddress(result);
   });

   let getAddress2 = this.returnAddress2().then(function(result){
     AHC.props.saveAddress2(result);
   });

   let getCity = this.returnCity().then(function(result){
     AHC.props.saveCity(result);
   });

   let getState = this.returnState().then(function(result){
     AHC.props.saveState(result);
   });

   let getZip = this.returnZip().then(function(result){
     AHC.props.saveZip(result);
   });

   let getLatitude = this.returnLatitude().then(function(result){
     AHC.props.saveLatitude(result);
   });

   let getLongitude = this.returnLongitude().then(function(result){
     AHC.props.saveLongitude(result);
   });

   let getCancel = this.returnCancel().then(function(result){
     AHC.props.saveCancel(result);
   });

   let getSilence = this.returnSilence().then(function(result){
     AHC.props.saveSilence(result);
   });

   let getPhone = this.returnPhone().then(function(result){
     AHC.props.savePhone(result);
   });

   let getConfirm = this.returnConfirm().then(function(result){
     AHC.props.saveConfirm(result);
   });

   let getCops = this.returnCops().then(function(result){
    AHC.props.saveCops(result);
     console.log(result);
     console.log('my subscription');

    if(result == null){
      console.log('hey bro no subscrippy');
      AHC.setState({
        hasSubscription:false
      })
    }else{
      AHC.setState({
        hasSubscription:true
      })
      console.log('hey brahge you got a  subscrippy');
    }



   });


   AsyncStorage.getAllKeys();



  	}

    componentDidUpdate() {
   console.log('update');
}
componentDidMount(){
  console.log(this.state);
}


async returnTheID(){
    return this.returnAsync('HOWL_ID');
}
async returnToken(){
    return this.returnAsync('HOWL_WCF_JWT');
}
async returnFirstName(){
    return this.returnAsync('HOWL_FIRST_NAME');
}
async returnLastName(){
    return this.returnAsync('HOWL_LAST_NAME');
}
async returnEmail(){
    return this.returnAsync('HOWL_EMAIL');
}
async returnAddress(){
    return this.returnAsync('HOWL_ADDRESS');
}
async returnAddress2(){
    return this.returnAsync('HOWL_ADDRESS_2');
}
async returnCity(){
    return this.returnAsync('HOWL_CITY');
}
async returnState(){
    return this.returnAsync('HOWL_STATE');
}
async returnLatitude(){
    return this.returnAsync('HOWL_LATITUDE');
}
async returnLongitude(){
    return this.returnAsync('HOWL_LONGITUDE');
}
async returnZip(){
    return this.returnAsync('HOWL_ZIP');
}
async returnCops(){
    return this.returnAsync('HOWL_COPS');
}
async returnCancel(){
    return this.returnAsync('HOWL_CANCEL_CODE');
}
async returnSilence(){
    return this.returnAsync('HOWL_SILENCE_CODE');
}
async returnPhone(){
    return this.returnAsync('HOWL_PHONE');
}
async returnConfirm(){
    return this.returnAsync('HOWL_CONFIRMATION');
}


getButtonWidthLayout(e) {
    this.setState({
        buttonWidth: e.nativeEvent.layout.width - 6,
        buttonHeight: e.nativeEvent.layout.height - 6
    });
  }


  getProgressStyles() {
    let width = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: [0, this.state.buttonWidth]
    });
    let bgColor = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: COLORS
    })
    return {
        width: width,
        height: this.state.buttonHeight,
        backgroundColor: bgColor
    }
  }



  	showMsg(x){
  		console.log(x);

  	}


    makeAlertCall(){


      let alertObject = {
        'UserID':this.state.mainuserid,
        'Latitude':this.state.latitude,
        'Longitude':this.state.longitude,
        'EmergancyType':this.state.emergencytype
      }

      console.log(alertObject);

        this.authorizedHowlCall("TriggerEmergencyAlert", alertObject, this.afterAlert);


    }

    afterAlert(x){

      console.log('emergency');
      console.log(x);


      let alertid = x.TriggerEmergencyAlertResult.getUserAlert.ID;
      let alertgeo = x.TriggerEmergencyAlertResult.getUserAlert.geo911;

      console.log(alertgeo);



      AsyncStorage.setItem('HOWL_ALERT_ID', alertid );
      if(alertgeo==null){}else{ AsyncStorage.setItem("HOWL_GEO", alertgeo);}

      Actions.testPackAlarm();

    }

    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }



  handlePressIn (x) {

    let AHC = this;
    //AHC.refs.circularProgress.performLinearAnimation(100, 8000);
    console.log(x);

    Animated.timing(this.state.pressAction, {
         duration: ACTION_TIMER,
         toValue: 1
      }).start(this.animationActionComplete);



     this.setState({
          showCancel: true,
          showHome: false,
          //opacity:1,
          //fill:100,
          emergencytype:x
      });

    }

  handlePressOut () {
    Animated.timing(this.state.pressAction, {
        duration: 0,
        toValue: 0
    }).start(this.animationComplete);


    this.setState({
        //showCancel: false,
        //showHome: true,
        //opacity: 1,
      //  latitude: null,
        //longitude: null,
        //error: null,
        //fill:0
    });

  }




  animationActionComplete () {

    console.log('done baby!!!');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      //(error) => this.setState({ error: error.message }),
      //{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );


      var message = '';
      if (this._value == 1) {
          message = '';
          this.makeAlertCall();
          //Alert.alert(this.state.emergencytype);

          this.setState({
              showCancel: false,
              showHome: true,

          });

      }else{
        this.setState({
            showCancel: false,
            showHome: true,

        });
      }
      this.setState({
          textComplete: message
      });

  }

  getButtonWidthLayout(e) {
      this.setState({
          buttonWidth: e.nativeEvent.layout.width - 6,
          buttonHeight: e.nativeEvent.layout.height - 6
      });
  }

  oncompleteAnimation(e){
    console.log('yoioiuij');



    console.log(this.state);

  }

    showProps(){
      console.log(this.props);
    }

    showProgress() {



      if (this.state.showCancel) {
                 return (
                   /*<AnimatedCircularProgress
                   size={240}
                   width={10}
                   fill={this.state.fill}
                   style={styles.circleStyle}
                   rotation={0}
                   tintColor="#0491ce"
                   backgroundColor="#c8c8c8"
                   backgroundWidth={10}

                   ref='circularProgress'
                   >
                   {
                     (fill) => (
                       <Text style={styles.points}>
                       { Math.round(MAX_POINTS * fill / 100) }
                       </Text>
                     )
                   }
                    </AnimatedCircularProgress>*/

                    <View style={styles.mainButton} onLayout={this.getButtonWidthLayout}>

                     <Animated.View style={[styles.bgFill, this.getProgressStyles()]} />
                     <View style={styles.mainView}></View>
                 </View>



                 );
             } else {
                 return null;
             }

    }


    showHome() {
      if (this.state.showHome) {
       return (

         <Card>
           <CardSection >
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.purchaseCamera()}>
               <View><Text style={styles.homeText}>CAMERA</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/camera.png')} /></View>
             </TouchableOpacity>
           </CardSection>

           <CardSection>
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.devicesMain()}>
               <View><Text style={styles.homeText}>VOICE ASSISTANT</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/device.png')} /></View>
             </TouchableOpacity>
           </CardSection>

           <CardSection>
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.mypackMain()}>
               <View><Text style={styles.homeText}>MY PACK</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/pack.png')} /></View>
             </TouchableOpacity>
           </CardSection>

           <CardSection>
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.monitoringMain()}>
               <View><Text style={styles.homeText}>MONITORING</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/monitor.png')} /></View>
             </TouchableOpacity>
           </CardSection>




           <CardSection style={{alignSelf:'center', justifyContent:'center'}}>
             <View style={{alignSelf:'center', justifyContent:'center'}}>

             </View>
           </CardSection>
         </Card>
       )
     }
    }


    showButtons() {
      if (this.state.hasSubscription) {
       return (
         <View style={styles.bigButtons} >

         <View style={{alignItems: 'center', marginTop:5}} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn.bind(this, this.state.callambulance)}
           onPressOut={this.handlePressOut}>
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/ambulanceOn.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         <View style={{alignItems: 'center', marginTop:30}} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn.bind(this, this.state.callpack)}
           //onPressIn={() => Actions.packAlarm()}
           onPressOut={this.handlePressOut}
           >
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/callPack.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         <View style={styles.policeStyle} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn.bind(this, this.state.callpolice) }
           onPressOut={this.handlePressOut}>
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/policeOn.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         <View style={styles.fireStyle} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn.bind(this, this.state.callfire) }
           onPressOut={this.handlePressOut}>
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/fireOn.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         </View>



       )
     }else{
       return (
         <View style={styles.bigButtons} >

         <View style={{alignItems: 'center', marginTop:5}} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn }

           onPressOut={this.handlePressOut}>
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/alertAmbulanceOff.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         <View style={{alignItems: 'center', marginTop:30}} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn }
           //onPressIn={() => Actions.packAlarm()}
           onPressOut={this.handlePressOut}
           >
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/callPack.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         <View style={styles.policeStyle} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn }
           onPressOut={this.handlePressOut}>
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/alertPoliceOff.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         <View style={styles.fireStyle} >
         <TouchableWithoutFeedback
           onPressIn={this.handlePressIn }
           onPressOut={this.handlePressOut}>
             <View>
                 <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/alertFireOff.png')} />
             </View>
         </TouchableWithoutFeedback>
         </View>

         </View>




       )
     }
    }

  render () {

    const fill = this.state.points / MAX_POINTS * 100;




    return (
      <ScrollView style={{borderColor:'#fff', paddingTop:65, paddingBottom:65}}>


        <Text


        style={styles.welcomeText}>Welcome back, {this.state.firstname}</Text>

        <View style={{alignItems: 'center'}} >

        {this.showProgress()}

        </View>

        {this.showHome()}

        {this.showButtons()}


         <Text style={styles.tapStyle}>TAP & HOLD FOR 3 SECONDS TO SOUND ALARM</Text>



      </ScrollView>
    );
  }
}

const styles = {
  mainButton:{
    padding:10,
    borderWidth:3,
    borderColor:'#0d3548',
    marginTop:100,
    marginBottom:77
  },
  button: {
  padding: 10,
  borderWidth: 3,
  borderColor: '#dadada',
  marginTop:50
},
text: {
  backgroundColor: 'transparent',
  color: '#111'
},
bgFill: {
  position: 'absolute',
  top: 0,
  left: 0
},
  packStyle:{
    width:40,
    height:40,
  },
  tapStyle:{
    textAlign:'center',
    color:'#000',
    marginTop:10
  },
  welcomeText:{
    fontSize:18,
    color:'#333',
    fontWeight:'800',
    textAlign:'center'
  },
  circleStyle:{
    marginTop:90
  },
  deviceStyle:{
    width:40,
    height:40,
  },
  monitorStyle:{
    width:40,
    height:40,
  },
  cameraStyle:{
    width:35,
    height:30
  },
  callPack:{
    width:110,
    height:110
  },
  callStyle:{
    width:300,
    height:300,
    alignSelf:'center',
    justifyContent:'center',
    marginTop:10
  },
  mainView:{
    width:200,
    height:30
  },
  homeButton:{
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#dadada',
    marginLeft: 5,
    marginRight: 5,
    overflow:'hidden',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5
  },
  homeText:{
    color: '#054068',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    paddingLeft: 20
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111'
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111'
  },
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 72,
    left: 60,
    width: 90,
    textAlign: 'center',
    color: '#000000',
    fontSize: 50,
    fontWeight: "100"
  },
  policeStyle:{
    position:'absolute',
    left:40,
    top:75
  },
  fireStyle:{
    position:'absolute',
    right:40,
    top:75
  },
  bigButtons:{
    position:'relative'
  }
}


const mapStateToProps = ({ user }) => {
  const { userid,
     usertoken,
     userfirstname,
     userlastname,
     useraddress,
     useraddress2,
     usercity,
     userstate,
     userzip,
     userlatitude,
     userlongitude,
     usercops,
     usercancel,
     usersilence,
     userphone,
     userconfirm } = user;

  return {
     userid,
     usertoken,
     userfirstname,
     userlastname,
     useraddress,
     useraddress2,
     usercity,
     userstate,
     userzip,
     userlatitude,
     userlongitude,
     usercops,
     usercancel,
     usersilence,
     userphone,
     userconfirm };
};

export default connect(mapStateToProps, {
   saveId,
   saveToken,
   saveFirstName,
   saveLastName,
   saveEmail,
   saveAddress,
   saveAddress2,
   saveCity,
   saveState,
   saveZip,
   saveLatitude,
   saveLongitude,
   saveCops,
   saveCancel,
   saveSilence,
   savePhone,
   saveConfirm
 })(HomeScreen);
