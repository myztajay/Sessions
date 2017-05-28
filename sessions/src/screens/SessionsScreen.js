import  React, { Component } from 'react';
import { View, Text } from 'react-native';


class SessionsScreen extends Component{
  static navigationOptions = {
  title: 'Home'
  }
  render(){
    return(
      <View>
        <Text> SessionsScreen </Text>
      </View>
    )
  }
}

export { SessionsScreen };
