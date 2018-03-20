import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GoogleButton = ({ onPress, children}) =>{
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
    paddingLeft: 20
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#d34836',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#d34836',
    marginLeft: 20,
    marginRight: 20,
    overflow:'hidden',
    paddingTop:8,
    paddingBottom:8,
  }
}

export { GoogleButton };
