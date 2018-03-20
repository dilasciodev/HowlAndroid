import React from 'react';
import { Text, TouchableOpacity,Image } from 'react-native';

const BlueButtonNext = ({ onPress, children}) =>{
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>

      <Text style={styles.buttonText}>NEXT</Text>
      <Image style={styles.arrowImage} source={require('../../assets/images/blueArrow.png')}></Image>

    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 16,
    paddingBottom: 10,
    textAlign: 'center',

  },
  arrowImage:{
    width:40,
    height:20,
    position: 'absolute',
    top:16,
    right:'30%'
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 16,
    paddingBottom: 10,
    textAlign: 'center',

  },
  buttonStyle: {
    alignSelf:'stretch',
    backgroundColor: '#00a3d8',
    borderColor: '#00a3d8',
    borderRadius: 30,
    borderWidth: 1,
    height:60,
    overflow:'hidden',
    marginTop:30
  }
}

export { BlueButtonNext };
