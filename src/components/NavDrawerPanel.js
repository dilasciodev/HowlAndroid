import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton, FacebookButton, CreateButton, GoogleButton } from './common';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';


class NavDrawerPanel extends AuthorizedHowlComponent {
  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
}
  render () {
    return (
      <ScrollView style={styles.mainPanel}>

        <TouchableOpacity onPress={() => Actions.homeScreen()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/blueHome.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.getAlerts()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/blueAlert.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Alerts</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.purchaseCamera()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/blueCamera.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Cameras</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.devicesMain()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/blueNetwork.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Devices</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.mypackMain()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/bluePack.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Pack</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.monitoringMain()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/blueMonitor.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Monitoring</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.helpSupport()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/blueQuestion.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Help & Support</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => Actions.settingsMain()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/blueCog.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.logoutask()} style={styles.sideButton}>
          <View>
            <Image source={require('../assets/images/menu/bluePower.png')} />
          </View>
          <View>
            <Text style={styles.sideText}>Logout</Text>
          </View>
        </TouchableOpacity>


      </ScrollView>
    );
  }
}

const styles = {
  mainPanel:{
    backgroundColor:'#063e5b',
    paddingLeft:25,
    paddingTop:30,
    flex:1
  },
  cameraStyle:{
    width:15,
    height:15
  },
  sideButton:{
    paddingBottom:25,
    flexDirection: 'row',

  },
  sideText:{
    fontSize:20,
    textAlign:'left',
    paddingLeft:20,
    paddingTop:7,
    color:'#7bd0f9'
  }
}

export default NavDrawerPanel;
