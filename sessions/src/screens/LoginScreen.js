import  React, { Component } from 'react';
import { firebase } from 'firebase'
import { View, Text, Button} from 'react-native';
import { Firebase, auth, googleAuthProvider } from '../../Firebase'


class LoginScreen extends Component{
  static navigationOptions = {
  title: 'Login'
  }
  render(){
    return(
      <View>
        <Text> Login Screen </Text>
        <Button
        title='Login'
        onPress= {()=>}
        ></Button>
      </View>
    )
  }
}

export { LoginScreen };
