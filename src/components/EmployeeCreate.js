import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { TextField } from 'react-native-material-textfield';

class EmployeeCreate extends Component {
  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
}
  render () {
    return (
      <Card>
        <CardSection>
          <TextField
            label="Name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            />
        </CardSection>

        <CardSection>
        <TextField
          label="Phone"
          value={this.props.phone}
          onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          // onchangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection
        style={{  }}
        >
          <Text
            style={styles.pickerTextStyle}
          >Picker</Text>
          <Picker
            style={{ flex:1 }}
            selecteedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
}

const mapStateToProps = (state) => {
  // destructuring
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
