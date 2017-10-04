import  React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Firebase, AppKey } from '../../Firebase'
import { Input, CardSectionVertical, Card } from '../components/common'
import axios from 'axios'

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
      user:'',
      location: 'home'
    }
  }

  onCreateButtonPress(){
    const user = Firebase.auth().currentUser;
    console.log(user.email)
    if (user){
    Firebase.database().ref()
      .child('sessions')
      .push({name: this.state.name, description: this.state.description, location: this.state.location, creator: user.email, uid:user.uid })

    this.props.navigation.navigate('Main')}
    else{
      this.props.navigation.navigate('Login')
    }
  }
  
  onLocationInput(location){
    console.warn(location)
    this.setState({ location })
    //Trigger API call for google place if above number of characters
    // Need to store response and only do calls if location doesnt match.
    if (location.length >= 9){
      console.warn('enough for api call')
      axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${AppKey}`)
      .then((res)=>console.log(res))
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
          <Input
            label='Location'
            onChangeText={this.onLocationInput.bind(this)}
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
