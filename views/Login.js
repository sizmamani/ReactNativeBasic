import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props)
  }

  render() {
    return (
      <View>
        <Text> Login Page </Text>
        <Button title="Register" onPress={()=>{this.props.navigation.navigate('Register')}} />
      </View>
    );
  }
}
