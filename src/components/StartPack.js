import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonFull, Input } from './common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';



class StartPack extends Component {


    constructor(props) {

    super(props)

    this.state = {

      TextEmail: ''


    }
      this.checkText = this.checkText.bind(this);

  }
      checkText () {

        console.log(this.state);

        const { TextEmail }  = this.state ;


        if(TextEmail == '' )
        {
        Alert.alert("Please Enter A Valid Password");
        }
        else{

        Actions.verifyPhone()

        }
       }



  render () {

    return (

                <View style={styles.slide1}>
                  <Image style={styles.imageStyle} source={require('../assets/images/introPass.png')} />
                  <Text style={styles.text}>ENTER 4-DIGIT CODE</Text>
                  <Text style={styles.smallText}>We sent a code to NUMBER ENTER the code in that message.</Text>
                  <View>
                  <View>
                  <TextField
                    label='PASSWORD'
                    style={styles.textStyle}
                    onChangeText={TextEmail => this.setState({TextEmail})}
                    />
                    <Icon name="lock" size={20} color="#999" style={styles.iconStyle}/>
                </View>

                    </View>
                  <BlueButtonFull onPress={this.checkText}>
                  <Text>NEXT</Text>
                  <Image style={styles.arrowImage} source={require('../assets/images/blueArrow.png')}></Image>
                  </BlueButtonFull>
                </View>

            );
          }
        }

const styles = {
  container:{
    flex: 1,
    paddingLeft:40,
    paddingRight:40
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
  imageStyle:{
    width:200,
    height:200,
    marginBottom:20,
    alignSelf:'center'
  },
  slide1: {

    flex: 1,
    justifyContent: 'flex-start',

    alignSelf: 'stretch',
    paddingTop:80,
    paddingLeft:40,
    paddingRight:40

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
    paddingVertical: 140
  },
  textStyle:{

  }
}

export default StartPack;
