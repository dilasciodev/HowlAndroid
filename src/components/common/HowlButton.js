import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const HowlButton = ({ onPress, children}) =>{
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
    color: '#054068',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    paddingLeft: 20
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#dadada',
    marginLeft: 5,
    marginRight: 5,
    overflow:'hidden'
  }
}

export { HowlButton };
