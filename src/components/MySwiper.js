import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Actions,
  Button,
  TouchableOpacity
} from 'react-native';
import { BlueButtonNext } from './common';

import Swiper from 'react-native-swiper';


export default class MySwiper extends Component {


  render () {

    const resizeMode = 'center';

    return (

            <Swiper
              showsButtons={false}
              paginationStyle={styles.buttonStyle}
              loop={false}
              style={styles.wrapper}
              indexChanged={() => Actions.cameraMain()}

              >

                <View style={styles.slide1}>
                  <Image style={styles.imageStyle} source={require('../assets/images/swiperHome.png')} />
                  <Text style={styles.text}>SEE YOUR HOME</Text>
                  <Text style={styles.text2}>HOWL Alert integrates with our HOWL Motion Sensor Cameras so you can see your home while you’re away and access valuable media associated with motion and emergency alerts.</Text>
                </View>
                <View style={styles.slide2}>
                  <Image style={styles.imageStyle} source={require('../assets/images/swiperBell.png')} />
                  <Text style={styles.text}>ALERTS</Text>
                  <Text style={styles.text2}>Free users can only alert their Pack. Monitored users can also alert the Police. Fire Department, and Ambulance via our professional 24-7 monitoring service. *HOWL hack: free users can have Pack members call emergency services on their behalf.</Text>
                </View>
                <View style={styles.slide3}>
                  <Image style={styles.imageStyle} source={require('../assets/images/swiperMic.png')} />
                  <Text style={styles.text}>VOICE ACTIVATION</Text>
                  <Text style={styles.text2}>HOWL Alert Duress Code: “Alert Pack”
Professional emergency response requires a subscription to HOWL Monitoring.</Text>
                </View>


              </Swiper>


            );
          }
        }

const styles = {

  wrapper: {
    marginTop:0,
    paddingTop:0
  },
  imageStyle:{
    width:180,
    height:180,
    marginBottom:20
  },
  slide1: {

    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop:40,

  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:40

  },
  slide3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:40
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
  },
  buttonStyle:{
    paddingVertical: 0,
    marginTop:0
  }
}
