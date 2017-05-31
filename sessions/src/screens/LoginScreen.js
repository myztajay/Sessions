import  React, { Component } from 'react';
import { firebase } from 'firebase'
import { View, Text, Button} from 'react-native';
import { Input, CardSectionVertical, Card } from '../components/common'
import { Firebase, auth, googleAuthProvider } from '../../Firebase';


class LoginScreen extends Component{
  static navigationOptions = {
  title: 'Login'
  }
  render(){
    return(
      <View>
        <CardSectionVertical>
          <Input
            label='Email'
          />
          <Input
            label="Password"
            secureTextEntry={true}
          />
          </CardSectionVertical>
      
      </View>
    )
  }
}


export { LoginScreen };
