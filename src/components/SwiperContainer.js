import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { BlueButton2 } from './common';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MySwiper from './MySwiper';

const SwiperContainer = () =>{

  const resizeMode = 'center';



  return (
    <View>

      <Image style={styles.imageStyle} source={require('../assets/images/treesfull.png')} >
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.textStyle}>
          NEXT
        </Text>
      </TouchableOpacity>
      <MySwiper />


      </Image>
    </View>
  );
};

const styles = {
  mainButton:{
    position:'absolute',
    bottom:40,
    right:40,
    backgroundColor: '#00a3d8',
    borderColor: '#00a3d8',
    borderRadius: 30,
    borderWidth: 1,
    height:60,
    width:150,
    zIndex:9
  },
  imageStyle:{

          width: '100%',
          height: '100%',
          justifyContent: 'center'

  }
}

export default SwiperContainer;
