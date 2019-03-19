import  React, { Component } from 'react';
import { firebase } from 'firebase'
import { View, Text} from 'react-native';
import { Input, CardSectionVertical, Card, Button } from '../components/common'
import { Firebase } from '../../Firebase';
import { LinearGradient } from 'expo';


class RegisterScreen extends Component{
  static navigationOptions = {
  title: 'Register',
  headerTransparent: true,
  headerTintColor: '#fff',
  }

  constructor(props){
  super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  }

  onButtonPress = () => {
    if(this.state.confirmPassword !== this.state.password){
      this.setState({error: 'Your passwords do not match'})
    }
    else{
      Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((authData)=>{
        // If user creation was succesful, make an entry the database.
        Firebase.database().ref().child("users").child(authData.uid).set({
          milesAway: 15,
          topics:{
            reactjs: true,
            angularjs: true,
            nodejs: true
          }
        })
      })
      .then(()=>{
        this.props.navigation.navigate('Login')
      })
      .catch((error)=>{
        this.setState({ error: error.message })
      })
    }
  }

  render(){
    return(
      <LinearGradient
      colors={[ '#4c669f', '#3b5998', '#192f6a' ]}
      style={{ flex: 1, padding: 15, alignItems: 'center',  justifyContent:'center' }}
    >
       
          <Input
            label='Email'
            color="#000000"
            onChangeText={(email) => this.setState({ email })}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            color="#000000"
            onChangeText={(password) => this.setState({ password })}
          />
          <Input
            label="Confirm Password"
            secureTextEntry={true}
            color="#000000"
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          />
          <Text>{this.state.error}</Text>
          <Button
            label='Signup'
            onPress={this.onButtonPress.bind(this)}
            backgroundColor="#ffc626" 
            color="#000000" 
          />
    
        </LinearGradient>
    )
  }
}

export { RegisterScreen };
