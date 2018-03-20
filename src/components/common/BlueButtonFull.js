import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BlueButtonFull = ({ onPress, children}) =>{
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>

        {children}
    
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
    marginLeft:0

  }
}

export { BlueButtonFull };
