import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BlueButton2 = ({ onPress, children}) =>{
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',

  },
  buttonStyle: {
    backgroundColor: '#00a3d8',
    borderColor: '#00a3d8',
    borderRadius: 30,
    borderWidth: 1,
    marginLeft: 90,
    marginRight: 90,
    overflow:'hidden',
    height:36,
    marginBottom:40
  }
}

export { BlueButton2 };
