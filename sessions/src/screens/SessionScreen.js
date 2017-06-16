import  React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSectionVertical } from '../components/common';


class SessionScreen extends Component{
  static navigationOptions = ( {navigation} )=> {
  title: 'navigation.state.params.name'
  }
  render(){
    const { name, description, creator } = this.props.navigation.state.params
    return(
      <CardSectionVertical>
        <Text> {name} </Text>
        <Text> {description} </Text>
        <Text> {creator} </Text>
      </CardSectionVertical>
    )
  }
}

export { SessionScreen };
