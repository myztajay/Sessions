import  React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Firebase, AppKey } from '../../Firebase';
import { Input, CardSectionVertical, Card, Button } from '../components/common';
import { LinearGradient } from 'expo';
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
      topic: 'angularjs'
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
  
  onLocationInput = (location) =>{
    this.setState({ location })
    //Trigger API call for google place if above number of characters
    // Need to store response and only do calls if location doesnt match.
    if (location.length >= 9){
      console.warn('enough for api call')
      axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${AppKey}`)
      .then((res) => {
        // api limit checking.
        if(res.data.error_message) this.setState({ error: res.data.error_message });
        else if(res.data.results[0] != undefined){
          //Sometime will return multiple items so refactor is need for listing multiple choices
          this.setState({
            googlePlace: res.data.results[0],
          });
            console.log("this is the gooogle place in axios call if undefined we got an error  google place : " + this.state.googlePlace + "and googplace formatted addr: "+ this.state.googlePlace.formatted_address + " this is the error: " + this.state.error );
        }        
      });
    }
  }
  
  renderGooglePlace(){
    // Janky need to be refactored - Way of chechking if api call limit reached
    console.log("this is the gooogle place in render : " + this.state.googlePlace.formatted_address );
    if(!this.state.isLocation && this.state.error === ''){
      return (
        <Text
        onPress={()=>{
          this.setState({ location: this.state.googlePlace.formatted_address , isLocation: true })
        }}
        >
        {this.state.googlePlace.formatted_address }
        </Text>      
      ) 
    }
  }

  render(){
    return(
      <LinearGradient 
      colors={[ '#4c669f', '#3b5998', '#192f6a' ]}
      style={{ flex:1, alignItems:'center', flexDirection:'column', padding:5 }}> 
      
          <Input
            label='Name'
            onChangeText={(name) => this.setState({ name })}
            maxLength={25}
            color="#000000" 
          />
          <Input
            label="Description"
            onChangeText={(description) => this.setState({ description })}
            maxLength={25}
            color="#000000" 
          />
          <Input
            label='Location'
            onChangeText={this.onLocationInput}
            value={this.state.location}
            maxLength={25}
            color="#000000" 
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
            label='Create Session'
            onPress={this.onCreateButtonPress.bind(this)}
            backgroundColor="#ffc626" 
            color="#000000" 
          />
      </LinearGradient>
    )
  }
}

export { NewSessionScreen };
