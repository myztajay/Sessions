import  React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Firebase } from '../../Firebase'
import { Input, CardSectionVertical, Card } from '../components/common'

class NewSessionScreen extends Component{
  static navigationOptions = {
  title: 'New Session'
  }
  constructor(props){
  super(props)
    this.state = {
      name: '',
      description: '',
      error: '',
      user:''
    }
  }

  onCreateButtonPress(){
    const user = Firebase.auth().currentUser;
    console.log(user.email)
    if (user){
    Firebase.database().ref()
      .child('sessions')
      .push({name: this.state.name, description: this.state.description, creator: user.email })

    this.props.navigation.navigate('Main')}
    else{
      this.props.navigation.navigate('Login')
    }
  }

  render(){
    return(
      <View>
        <CardSectionVertical>
          <Input
            label='Name'
            onChangeText={(name) => this.setState({ name })}
          />
          <Input
            label="Description"
            onChangeText={(description) => this.setState({ description })}
          />
          <Text>{this.state.error}</Text>
          <Button
            title='Create Session'
            onPress={this.onCreateButtonPress.bind(this)}
          />
        </CardSectionVertical>
      </View>
    )
  }
}

export { NewSessionScreen };
