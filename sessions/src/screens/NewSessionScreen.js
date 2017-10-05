import  React, { Component } from 'react';
import { View, Text, Button, Picker } from 'react-native';
import { Firebase, AppKey } from '../../Firebase';
import { Input, CardSectionVertical, Card } from '../components/common';
import axios from 'axios';

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
      location: '',
      isLocation: false,
      googlePlace: '',
      topic: ''
    }
  }

  onCreateButtonPress(){
    const user = Firebase.auth().currentUser;
    console.log(user.email)
    if (user){
    Firebase.database().ref()
      .child('sessions')
      .push({name: this.state.name, description: this.state.description, googlePlace: this.state.googlePlace, topic: this.state.topic, location: this.state.location, creator: user.email, uid:user.uid })
    this.props.navigation.navigate('Main')}
    else{
      this.props.navigation.navigate('Login')
    }
  }
  
  onLocationInput(location){
    this.setState({ location })
    //Trigger API call for google place if above number of characters
    // Need to store response and only do calls if location doesnt match.
    if (location.length >= 9){
      console.warn('enough for api call')
      axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${AppKey}`)
      .then((res)=>{
        // api limit checking.
        if(res.data.error_message) this.setState({ error: res.data.error_message })
        else{
        //Sometime will return multiple items so refactor is need for listing multiple choices
          this.setState({
            googlePlace: res.data.results[0]
          })
        }        
      })    
    }
  }
  
  renderGooglePlace(){
    // Janky need to be refactored - Way of chechking if api call limit reached
    if(!this.state.isLocation && this.state.error === ''){
      return (
        <Text
        onPress={()=>{
          this.setState({ location: this.state.googlePlace.formatted_address , isLocation: true })
        }}>{this.state.googlePlace.formatted_address }</Text>      
      ) 
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
            value={this.state.location}
          />
          {this.renderGooglePlace()}
          <Picker
            selectedValue={this.state.topic}
            onValueChange={(itemValue, itemIndex) => this.setState({topic: itemValue})}>
            <Picker.Item label="Angular" value="angularjs" />
            <Picker.Item label="React" value="reactjs" />
            <Picker.Item label="Node" value="nodejs" />
          </Picker>
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
