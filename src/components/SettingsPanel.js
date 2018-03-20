import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { Scene, Router, Actions, ActionConst, Drawer, TouchableHighlight } from 'react-native-router-flux';import { Card, CardSection, Button, HowlButton, FacebookButton, CreateButton, GoogleButton } from './common';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';
import Autolink from 'react-native-autolink';
import Mailer from 'react-native-mail';




class SettingsPanel extends AuthorizedHowlComponent {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
}


  constructor(props) {
    super(props);
    //this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {

 			//listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
     };
     this.handleEmail = this.handleEmail.bind(this);
     this.handleSupportEmail = this.handleSupportEmail.bind(this);


  }

handleEmail = () => {
    Mailer.mail({
      subject: 'Howl Alert Feedback',
      recipients: ['feedback@howlalert.com'],
      body: '<b>Howl Alert Feedback</b>',
      isHTML: true,
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Your Email has been sent')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Your email has been cancelled')}
        ],
        { cancelable: true }
      )
    });
  }


  handleSupportEmail = () => {
      Mailer.mail({
        subject: 'Howl Alert Support',
        recipients: ['support@howlalert.com'],
        body: '<b>Howl Alert Feedback</b>',
        isHTML: true,
        attachment: {
          path: '',  // The absolute path of the file from which to read data.
          type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
          name: '',   // Optional: Custom filename for attachment
        }
      }, (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {text: 'Ok', onPress: () => console.log('OK: Your Email has been sent')},
            {text: 'Cancel', onPress: () => console.log('CANCEL: Your email has been cancelled')}
          ],
          { cancelable: true }
        )
      });
    }



  render () {
    return (
      <View style={styles.mainPanel}>

        <TouchableOpacity onPress={() => Actions.editProfile()} style={styles.sideButton}>
          <View>
            <Icon name="user" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.getNotifications()} style={styles.sideButton}>
          <View>
            <Icon name="bell" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.changeAddress()} style={styles.sideButton}>
          <View>
            <Icon name="location-pin" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Change Home Address</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.changePassword()} style={styles.sideButton}>
          <View>
            <Icon name="lock" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Change Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.changeCancel()} style={styles.sideButton}>
          <View>
            <Icon name="lock" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Change Cancel Code</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.changeSilent()} style={styles.sideButton}>
          <View>
            <Icon name="lock" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Change Silent Code</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.printCode()} style={styles.sideButton}>
          <View>
            <Icon name="speech" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Print Code</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity onPress={this.handleSupportEmail} style={styles.sideButton}>
          <View>
            <Icon name="envelope-open" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Contact Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.termsConditions()} style={styles.sideButton}>
          <View>
            <Icon name="speech" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Terms and Conditions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.privacyPolicy()} style={styles.sideButton}>
          <View>
            <Icon name="user" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>











      </View>
    );
  }
}

const styles = {
  mainPanel:{


    flex:1
  },
  cameraStyle:{
    width:15,
    height:15
  },
  sideButton:{
    paddingBottom:15,
    flexDirection: 'row',
    borderBottomColor:'#dadada',
    borderBottomWidth:1,
    paddingTop:15
  },
  sideText:{
    fontSize:18,
    textAlign:'left',
    paddingLeft:20,
    paddingTop:7,
    color:'#333'
  }
}

export default SettingsPanel;
