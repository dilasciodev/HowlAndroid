import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BlueButton = ({ onPress, children}) =>{
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
    textAlign: 'left',
    paddingLeft: 20
  },
  buttonStyle: {
    backgroundColor: '#00a3d8',
    borderColor: '#00a3d8',
    borderRadius: 30,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    overflow:'hidden',
    width:100,
    height:36
  }
}

export { BlueButton };
