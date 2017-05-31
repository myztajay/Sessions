import  React, { Component } from 'react';
import { firebase } from 'firebase'
import { View, Text, Button} from 'react-native';
import { Input, CardSectionVertical, Card } from '../components/common'
import { Firebase } from '../../Firebase';


class LoginScreen extends Component{
  static navigationOptions = {
  title: 'Login'
  }

  constructor(props){
  super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      authenticated: false
    }
  }

  onButtonPress = () => {
    Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      this.setState({ authenticated: true })
      this.props.navigation.navigate('Main')
    })
    .catch((error)=>{
      this.setState({ error: error.message })
    })
  }

  render(){
    return(
      <View>
        <CardSectionVertical>
          <Input
            label='Email'
            onChangeText={(email) => this.setState({ email })}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <Text>{this.state.error}</Text>
          <Button
            title='Login'
            onPress={this.onButtonPress.bind(this)}
          />
        </CardSectionVertical>
      </View>
    )
  }
}

export { LoginScreen };
